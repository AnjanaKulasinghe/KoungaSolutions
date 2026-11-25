#!/usr/bin/env python3
"""Dependency-free SEO checks for this static multi-page site."""

from __future__ import annotations

import json
import re
import sys
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
SITE_ORIGIN = "https://www.koungasolutions.co.nz"
SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title_parts: list[str] = []
        self.title_count = 0
        self.in_title = False
        self.descriptions: list[str] = []
        self.canonicals: list[str] = []
        self.language = ""
        self.h1_count = 0
        self.ids: set[str] = set()
        self.images: list[tuple[str, str | None]] = []
        self.local_references: list[str] = []
        self.fragment_references: list[tuple[str, str]] = []
        self.json_ld: list[str] = []
        self.in_json_ld = False
        self.json_ld_parts: list[str] = []
        self.nav_toggle: tuple[str | None, str | None] | None = None
        self.open_graph: set[str] = set()
        self.analytics_ids: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = dict(attrs)
        if tag == "html":
            self.language = attr.get("lang") or ""
        if tag == "title":
            self.title_count += 1
            self.in_title = True
        if tag == "h1":
            self.h1_count += 1
        if attr.get("id"):
            self.ids.add(attr["id"] or "")
        if tag == "img":
            self.images.append((attr.get("src") or "", attr.get("alt")))
        if tag == "meta" and attr.get("name", "").lower() == "description":
            self.descriptions.append(attr.get("content") or "")
        if tag == "meta" and (attr.get("property") or "").startswith("og:"):
            self.open_graph.add(attr["property"] or "")
        if tag == "link" and "canonical" in (attr.get("rel") or "").lower().split():
            self.canonicals.append(attr.get("href") or "")
        if tag == "script" and attr.get("type") == "application/ld+json":
            self.in_json_ld = True
            self.json_ld_parts = []
        if tag == "script" and attr.get("src", "").startswith("https://www.googletagmanager.com/gtag/js?"):
            match = re.search(r"[?&]id=([^&]+)", attr.get("src") or "")
            if match:
                self.analytics_ids.append(match.group(1))
        if tag == "button" and "mobile-toggle" in (attr.get("class") or "").split():
            self.nav_toggle = (attr.get("aria-label"), attr.get("aria-expanded"))

        href = attr.get("href")
        if href:
            self._record_reference(href)
        for key in ("src", "srcset"):
            value = attr.get(key)
            if value:
                candidates = [part.strip().split()[0] for part in value.split(",")]
                for candidate in candidates:
                    self._record_reference(candidate)

    def _record_reference(self, value: str) -> None:
        if urlparse(value).scheme or value.startswith("//"):
            return
        path, separator, fragment = value.partition("#")
        path = path.split("?", 1)[0]
        if path:
            self.local_references.append(path)
        if separator and fragment:
            self.fragment_references.append((path, fragment))

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        if tag == "script" and self.in_json_ld:
            self.json_ld.append("".join(self.json_ld_parts))
            self.in_json_ld = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)
        if self.in_json_ld:
            self.json_ld_parts.append(data)


def public_url(page: Path) -> str:
    relative_parent = page.parent.relative_to(ROOT).as_posix()
    if relative_parent == ".":
        return f"{SITE_ORIGIN}/"
    return f"{SITE_ORIGIN}/{relative_parent.rstrip('/')}/"


def main() -> int:
    errors: list[str] = []
    pages = sorted(
        path for path in ROOT.rglob("index.html")
        if ".git" not in path.parts and "node_modules" not in path.parts
    )
    if not pages:
        print("SEO checks failed: no index.html pages found")
        return 1

    parsed_pages: dict[Path, PageParser] = {}
    page_titles: dict[str, Path] = {}
    page_descriptions: dict[str, Path] = {}
    expected_urls: set[str] = set()
    for page in pages:
        parser = PageParser()
        parser.feed(page.read_text(encoding="utf-8"))
        parsed_pages[page] = parser
        expected_url = public_url(page)
        expected_urls.add(expected_url)
        relative = page.relative_to(ROOT).as_posix()
        title = " ".join("".join(parser.title_parts).split())
        description = parser.descriptions[0].strip() if len(parser.descriptions) == 1 else ""

        if parser.title_count != 1 or not title:
            errors.append(f"{relative}: must have exactly one non-empty title")
        elif title in page_titles:
            errors.append(f"{relative}: duplicate title also used by {page_titles[title].relative_to(ROOT)}")
        else:
            page_titles[title] = page
        if len(parser.descriptions) != 1 or not description:
            errors.append(f"{relative}: must have exactly one non-empty meta description")
        elif description in page_descriptions:
            errors.append(f"{relative}: duplicate description also used by {page_descriptions[description].relative_to(ROOT)}")
        else:
            page_descriptions[description] = page
        if parser.canonicals != [expected_url]:
            errors.append(f"{relative}: canonical must be exactly {expected_url}")
        if parser.language.lower() != "en-nz":
            errors.append(f"{relative}: must declare lang=en-NZ")
        if parser.h1_count != 1:
            errors.append(f"{relative}: expected one h1, found {parser.h1_count}")
        if any(alt is None for _, alt in parser.images):
            errors.append(f"{relative}: every img element must include alt text")
        if any(not alt.strip() for _, alt in parser.images if alt is not None):
            errors.append(f"{relative}: image alt text must not be empty")
        if parser.nav_toggle is None or not all(parser.nav_toggle):
            errors.append(f"{relative}: mobile navigation toggle needs a name and aria-expanded")
        if parser.analytics_ids != ["G-C0F9498EJR"]:
            errors.append(f"{relative}: expected exactly one existing GA4 tag")
        for required_property in ("og:title", "og:description", "og:url", "og:image"):
            if f"{required_property}" not in parser.open_graph:
                errors.append(f"{relative}: missing Open Graph {required_property}")

    for page, parser in parsed_pages.items():
        for reference in set(parser.local_references):
            if reference.startswith("/"):
                target = (ROOT / reference.lstrip("/")).resolve()
            else:
                target = (page.parent / reference).resolve()
            if ROOT not in target.parents and target != ROOT:
                errors.append(f"{page.relative_to(ROOT)}: local reference escapes project: {reference}")
                continue
            if target.is_dir():
                target = target / "index.html"
            if not target.exists():
                errors.append(f"{page.relative_to(ROOT)}: missing local file or route: {reference}")
        for path_reference, fragment in parser.fragment_references:
            if path_reference.startswith("/"):
                target = (ROOT / path_reference.lstrip("/")).resolve()
            elif path_reference:
                target = (page.parent / path_reference).resolve()
            else:
                target = page
            if target.is_dir():
                target = target / "index.html"
            target_parser = parsed_pages.get(target)
            if target_parser and fragment not in target_parser.ids:
                errors.append(f"{page.relative_to(ROOT)}: broken fragment #{fragment} on {target.relative_to(ROOT)}")

    structured_types: dict[Path, set[str]] = {}
    structured_items: dict[Path, list[dict]] = {}
    for page, parser in parsed_pages.items():
        types: set[str] = set()
        items: list[dict] = []
        relative = page.relative_to(ROOT).as_posix()
        for block in parser.json_ld:
            try:
                document = json.loads(block)
            except json.JSONDecodeError as exc:
                errors.append(f"{relative}: invalid JSON-LD: {exc}")
                continue
            graph = document.get("@graph", [])
            items.extend(item for item in graph if isinstance(item, dict))
            types.update(item.get("@type") for item in graph if isinstance(item, dict))
            for item in graph:
                if isinstance(item, dict) and item.get("@type") == "ItemList":
                    elements = item.get("itemListElement", [])
                    if item.get("numberOfItems") != len(elements):
                        errors.append(f"{relative}: ItemList numberOfItems does not match its entries")
        structured_types[page] = types
        structured_items[page] = items
        if "WebPage" not in types:
            errors.append(f"{relative}: JSON-LD must describe the WebPage")

    root_page = ROOT / "index.html"
    if root_page not in structured_types:
        errors.append("index.html is missing")
    elif not {"Organization", "WebSite"}.issubset(structured_types[root_page]):
        errors.append("homepage JSON-LD must include Organization and WebSite")
    elif not {"Person"}.issubset(structured_types[root_page]):
        errors.append("homepage JSON-LD must describe the founder as a Person")
    else:
        root_items = structured_items[root_page]
        organization = next((item for item in root_items if item.get("@type") == "Organization"), {})
        founder = next((item for item in root_items if item.get("@type") == "Person"), {})
        publisher_brand = next((item for item in root_items if item.get("@type") == "Brand"), {})
        if organization.get("legalName") != "AJ&W Consulting Limited":
            errors.append("homepage Organization JSON-LD must use the verified legal name")
        if organization.get("foundingDate") != "2017":
            errors.append("homepage Organization JSON-LD must use the established year")
        if founder.get("name") != "Anjana Kulasinghe" or founder.get("gender") != "Male":
            errors.append("homepage Person JSON-LD must identify Anjana Kulasinghe accurately")
        if founder.get("jobTitle") != "Founder and Director":
            errors.append("homepage Person JSON-LD must use Founder and Director as the role")
        if organization.get("brand", {}).get("@id") != publisher_brand.get("@id") or publisher_brand.get("name") != "Kounga Games":
            errors.append("homepage JSON-LD must connect the Kounga Games brand to the legal company")
    service_page = ROOT / "services" / "test-automation" / "index.html"
    if service_page in structured_types and "Service" not in structured_types[service_page]:
        errors.append("test automation page JSON-LD must include Service")
    software_page = ROOT / "services" / "software-development" / "index.html"
    if software_page in structured_types and "Service" not in structured_types[software_page]:
        errors.append("software development page JSON-LD must include Service")
    products_page = ROOT / "products" / "index.html"
    if products_page in structured_types and "ItemList" not in structured_types[products_page]:
        errors.append("products page JSON-LD must include ItemList")
    if products_page in structured_items:
        product_items = structured_items[products_page]
        applications = [item for item in product_items if item.get("@type") == "SoftwareApplication"]
        if len(applications) != 5:
            errors.append("products page JSON-LD must describe all five company software products")
        lists = [item for item in product_items if item.get("@type") == "ItemList"]
        if lists:
            listed_ids = {
                entry.get("item", {}).get("@id")
                for entry in lists[0].get("itemListElement", [])
                if isinstance(entry.get("item"), dict)
            }
            application_ids = {item.get("@id") for item in applications}
            if listed_ids != application_ids:
                errors.append("products ItemList must reference each SoftwareApplication exactly once")
        for application in applications:
            company_id = "https://www.koungasolutions.co.nz/#organization"
            if application.get("creator", {}).get("@id") != company_id or application.get("publisher", {}).get("@id") != company_id:
                errors.append(f"{application.get('name', 'SoftwareApplication')}: creator and publisher must reference Kounga Solutions")

    sitemap_path = ROOT / "sitemap.xml"
    try:
        sitemap = ET.parse(sitemap_path).getroot()
        sitemap_urls = [node.text or "" for node in sitemap.findall("sm:url/sm:loc", SITEMAP_NS)]
        if set(sitemap_urls) != expected_urls or len(sitemap_urls) != len(expected_urls):
            errors.append("sitemap.xml must list each canonical public route exactly once")
        for entry in sitemap.findall("sm:url", SITEMAP_NS):
            lastmod = entry.findtext("sm:lastmod", namespaces=SITEMAP_NS)
            try:
                if not lastmod or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", lastmod):
                    raise ValueError
                date.fromisoformat(lastmod)
            except ValueError:
                errors.append("sitemap.xml must have a valid date-only lastmod for every route")
    except (ET.ParseError, OSError) as exc:
        errors.append(f"Invalid sitemap.xml: {exc}")

    robots_path = ROOT / "robots.txt"
    robots = robots_path.read_text(encoding="utf-8") if robots_path.exists() else ""
    if f"Sitemap: {SITE_ORIGIN}/sitemap.xml" not in robots:
        errors.append("robots.txt must declare the production sitemap")
    if re.search(r"(?im)^\s*Disallow:\s*/\s*$", robots):
        errors.append("robots.txt must not block the whole production site")

    if errors:
        print("SEO checks failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    image_count = sum(len(parser.images) for parser in parsed_pages.values())
    print(f"SEO checks passed for {len(pages)} pages, {image_count} images, and {len(expected_urls)} sitemap routes.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

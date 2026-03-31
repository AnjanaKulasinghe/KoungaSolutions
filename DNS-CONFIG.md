# DNS Configuration for koungasolutions.co.nz

**Last Updated:** 31 March 2026  
**Status:**  Production Ready

---

##  GitHub Pages Hosting (Website)

### A Records (IPv4)
```
Type: A    Name: @    Value: 185.199.108.153    TTL: 2 Hours
Type: A    Name: @    Value: 185.199.109.153    TTL: 2 Hours
Type: A    Name: @    Value: 185.199.110.153    TTL: 2 Hours
Type: A    Name: @    Value: 185.199.111.153    TTL: 2 Hours
```

### AAAA Records (IPv6)
```
Type: AAAA    Name: @    Value: 2606:50c0:8000::153    TTL: 2 Hours
Type: AAAA    Name: @    Value: 2606:50c0:8001::153    TTL: 2 Hours
Type: AAAA    Name: @    Value: 2606:50c0:8002::153    TTL: 2 Hours
Type: AAAA    Name: @    Value: 2606:50c0:8003::153    TTL: 2 Hours
```

### WWW Subdomain
```
Type: CNAME    Name: www    Value: anjanakulasinghe.github.io    TTL: 4 Hours
```

---

##  Email Configuration (Bluehost)

### MX Records (Email Delivery)
```
Type: MX    Name: @    Value: mx001.bluehost.xion.oxcs.net    Priority: 0    TTL: 2 Hours
Type: MX    Name: @    Value: mx002.bluehost.xion.oxcs.net    Priority: 0    TTL: 2 Hours
Type: MX    Name: @    Value: mx003.bluehost.xion.oxcs.net    Priority: 0    TTL: 2 Hours
Type: MX    Name: @    Value: mx004.bluehost.xion.oxcs.net    Priority: 0    TTL: 2 Hours
```

### Email Access Points
```
Type: CNAME    Name: imap       Value: imap.bluehost.xion.oxcs.net     TTL: 2 Hours
Type: CNAME    Name: mail       Value: http.bluehost.xion.oxcs.net     TTL: 2 Hours
Type: CNAME    Name: pop        Value: pop.bluehost.xion.oxcs.net      TTL: 2 Hours
Type: CNAME    Name: smtp       Value: smtp.bluehost.xion.oxcs.net     TTL: 2 Hours

Type: A        Name: webdisk    Value: 50.6.152.208    TTL: 4 Hours
Type: A        Name: webmail    Value: 50.6.152.208    TTL: 4 Hours
Type: A        Name: whm        Value: 50.6.152.208    TTL: 4 Hours
```

---

##  Email Security

### SPF (Sender Policy Framework)
```
Type: TXT    Name: @
Value: v=spf1 include:_spf.firebasemail.com include:spf.registeredsite.com include:spf.cloudus.oxcs.net ~all
TTL: 2 Hours
```

### DMARC (Domain-based Message Authentication)
```
Type: TXT    Name: @
Value: v=DMARC1; p=quarantine; rua=mailto:info@koungasolutions.co.nz; ruf=mailto:info@koungasolutions.co.nz; fo=1
TTL: 2 Hours

Type: TXT    Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:info@koungasolutions.co.nz; ruf=mailto:info@koungasolutions.co.nz; fo=1
TTL: 15 minutes
```

### DKIM (DomainKeys Identified Mail)

**Firebase DKIM:**
```
Type: CNAME    Name: firebase1._domainkey
Value: mail-koungasolutions-co-nz.dkim1._domainkey.firebasemail.com
TTL: 2 Hours

Type: CNAME    Name: firebase2._domainkey
Value: mail-koungasolutions-co-nz.dkim2._domainkey.firebasemail.com
TTL: 2 Hours
```

**Default DKIM:**
```
Type: TXT    Name: default._domainkey
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6JGMr+5j/WxqK2LfA5GoYF02+180v5GuuWfu3shdRbbOVSLlEGjv2W2D66lOKf+N1YVD1BaL2Rh5dRpZ8pUy4WmRNsPIKEijXEkwslnj+ClIls6bwIUVq7p5MEFT2oP3PYE1wDn6NNd1iUaW6zZFtfIZZN12FKOvC0XH9d6+rqspdjn7yRCHixJASW9P5BW4YiEGEHHmehlxXGYTeHLW7tAYnguHcnvJFQbDgfk6uo2gDIyUIK0yJ7zOoVGny0nnH7a7njWRAVmqhgFt4yFQqE/Fuz3q1e0NrI2hVJnGr2xQViT8wg7wwThc8Gk+O79r2mZMpIGXhqwpXaZlqwUw1QIDAQAB;
TTL: 1 Hour
```

**Additional DKIM:**
```
Type: TXT    Name: 3175717287._domainkey
Value: k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCG7ovxWk6LsUSoSR/yoWaalvTssurQfrVqZKQEBktMRBPBpcmslwT3ZxU4IX1PzRHAwWlrJTAvRaV8TjvbR4sUIUiluH4elvwSDZ4+vLPUdDQRCfhd4vvycXVbVSNQ+n7mN6dsZGVM9g1gWs/KMWAjHrKiKBr4W3TNM6JV0G4ReQIDAQAB
TTL: 15 minutes
```

---

##  Service Records

### Email Autodiscovery
```
Type: SRV    Name: _autodiscover._tcp.koungasolutions.co.nz.
Value: cpanelemaildiscovery.cpanel.net
TTL: 4 Hours
```

---

##  Firebase (Optional)

```
Type: TXT    Name: @
Value: firebase=bodyprogressapp-24a1a
TTL: 2 Hours
```
**Note:** This is for Firebase verification. Keep only if actively using Firebase hosting/services.

---

##  Configuration Summary

| Service | Records | Status |
|---------|---------|--------|
| Website Hosting | 4 A, 4 AAAA, 1 CNAME |  Active |
| Email Delivery | 4 MX |  Active |
| Email Access | 4 CNAME, 3 A |  Active |
| Email Security | 2 DMARC, 1 SPF, 4 DKIM |  Active |
| Autodiscovery | 1 SRV |  Active |
| Firebase | 1 TXT |  Optional |

---

##  Testing

### Website
```bash
# Test DNS resolution
dig koungasolutions.co.nz
dig www.koungasolutions.co.nz

# Test website
curl -I https://koungasolutions.co.nz
```

### Email
```bash
# Test MX records
dig MX koungasolutions.co.nz

# Test SPF
dig TXT koungasolutions.co.nz | grep spf

# Test DMARC
dig TXT _dmarc.koungasolutions.co.nz
```

---

##  Email Configuration for Clients

**IMAP (Recommended):**
- Server: `imap.koungasolutions.co.nz` or `imap.bluehost.xion.oxcs.net`
- Port: 993 (SSL) or 143 (TLS)
- Username: `your-email@koungasolutions.co.nz`
- Password: Your email password

**SMTP (Outgoing):**
- Server: `smtp.koungasolutions.co.nz` or `smtp.bluehost.xion.oxcs.net`
- Port: 465 (SSL) or 587 (TLS)
- Username: `your-email@koungasolutions.co.nz`
- Password: Your email password
- Authentication: Required

**POP3 (Alternative):**
- Server: `pop.koungasolutions.co.nz` or `pop.bluehost.xion.oxcs.net`
- Port: 995 (SSL) or 110 (TLS)

**Webmail Access:**
- URL: `https://webmail.koungasolutions.co.nz`

---

##  Important Notes

1. **DNS Propagation**: Changes can take 2-48 hours to propagate globally
2. **TTL Values**: Lower TTL = faster updates but more DNS queries
3. **Email Security**: All SPF, DKIM, and DMARC records are essential for deliverability
4. **Backup**: Keep this file as reference for DNS configuration
5. **GitHub Pages**: Ensure CNAME file exists in repository root

---

##  Last Changes

- **31 March 2026**: Corrected GitHub Pages A records (removed .154, .155, .156; added correct .109, .110, .111)
- **31 March 2026**: Verified all email security records (SPF, DKIM, DMARC) are active
- **31 March 2026**: Confirmed www CNAME points to anjanakulasinghe.github.io

---

**Need to make changes?** Always update this file after modifying DNS records.

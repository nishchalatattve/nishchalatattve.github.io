---
title: TLS configuration
icon: simple/nginx
---
# Configure TLS certificates with Let's Encrypt (certbot) with Nginx
## Prerequisites
- Have example.com point towards the server IP (A name record)
- Have Nginx installed
- Have Snap Store installed (with comes bundled with Ubuntu)
## Install certbot
```terminaloutput
$ sudo snap install --classic certbot
```
Link certbot to PATH
```terminaloutput
$ sudo ln -s /snap/bin/certbot /usr/local/bin/certbot
```
## Request TLS certificates
Have the following.
```text
# In /etc/nginx/sites-available/example.com

server {
        listen 80;
        listen [::]:80;

        root /var/www/example.com/html;
        index index.html;

        server_name example-li.com;

        location / {
                try_files $uri $uri/ =404;
        }
}
```
Then type
```terminaloutput
$ sudo certbot --nginx -d example.com
```

## References
- see [Certbot quickstart](https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal)
- see [Digital Ocean's guide](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)
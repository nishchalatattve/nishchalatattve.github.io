---
icon: simple/nginx
---
# [nginx](https://nginx.org/) guide

## Installation
```terminaloutput
$ sudo apt install nginx -y
```
``` title="mac installation"
--8<-- "docs/DevOps/Nginx/main.sh"
```
## Process management
```terminaloutput
$ sudo systemctl status nginx

$ sudo systemctl stop nginx
$ sudo systemctl start nginx

$ sudo systemctl restart nginx
```
If you are only making configuration changes, Nginx can often reload without dropping connections. 
To do this, type:
```terminaloutput
$ sudo systemctl reload nginx
```

By default, Nginx is configured to start automatically when the server boots. If this is not what you want, you can disable this behavior by typing:
```terminaloutput
$ sudo systemctl disable nginx
```
To re-enable the service to start up at boot, you can type:
```terminaloutput
$ sudo systemctl enable nginx
```

## Configuration
Nginx sites are located in `/etc/nginx/sites-available/`[^1].
For example `/etc/nginx/sites-available/example.com` could contain the following
```text
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
One may need to enable the site by typing
```terminaloutput
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
More advanced connection settings can be found in `/etc/nginx/nginx.conf`.
After modifying the configuration, you may test its validity by typing
```terminaloutput
$ sudo nginx -t
```

[^1]:
    On MacOS, the corresponding settings can be found in (`/opt/homebrew/etc/nginx/nginx.conf`).


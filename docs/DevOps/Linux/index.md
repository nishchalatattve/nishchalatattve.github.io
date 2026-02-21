---
title: Linux
icon: simple/linux
---
# Linux
## [User management](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-20-04)
To add a user
```shell
sudo adduser <newuser>
```
To add user to `sudo` group
```shell
usermod -aG sudo <newuser>
```

To delete a user
```shell
sudo deluser --remove-home <newuser>
```
## Resource checking
### [Check disk space](https://opensource.com/article/18/7/how-check-free-disk-space-linux)
```shell
df -h # (1)!
```

1.  The `-h` flag displays the size in human-readable format.

### Check RAM usage
```shell
free -h
```

## References
### General 
- [Linuxize](https://linuxize.com/) - Linux tutorials and guides
- [`chmod`](https://opensource.com/article/19/8/linux-chmod-command) - File permissions

### Docker
- [Install Docker on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [Manage Docker as a non-root user for Ubuntu](https://docs.docker.com/engine/install/linux-postinstall/)





# Linux
## [User management](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-20-04)
To add a user
```bash
sudo adduser <newuser>
```
To add user to `sudo` group
```bash
usermod -aG sudo <newuser>
```

To delete a user
```bash
sudo deluser --remove-home <newuser>
```
## Resource checking
### [Check disk space](https://opensource.com/article/18/7/how-check-free-disk-space-linux)
```bash
df -h # (1)!
```

1.  The `-h` flag displays the size in human-readable format.

### Check RAM usage
```bash
free -h
```

### Other utilities
```bash
tree -n --charset=ASCII -o tree.txt
```
## References
### General 
- [Linuxize](https://linuxize.com/) - Linux tutorials and guides
- [`chmod`](https://opensource.com/article/19/8/linux-chmod-command) - File permissions
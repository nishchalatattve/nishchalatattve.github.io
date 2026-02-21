---
icon: simple/nordvpn
---
# NordVPN 

## [Installation](https://support.nordvpn.com/hc/en-us/articles/20196094470929-Installing-NordVPN-on-Linux-distributions)
```shell
sudo snap install nordvpn
```
## [Login](https://support.nordvpn.com/hc/en-us/articles/20286980309265-How-to-log-in-to-NordVPN-without-a-GUI-using-a-token)
```shell
nordvpn login --token <token>
```


## [Meshnet](https://meshnet.nordvpn.com/getting-started/meshnet-explained)
### Enable Meshnet
```shell
nordvpn set meshnet on
```
### [Manage peers](https://meshnet.nordvpn.com/features/explaining-permissions/local-network-permissions)
```shell
nordvpn meshnet peer list

nordvpn meshnet peer local allow <device>
nordvpn meshnet peer local deny <device>
```

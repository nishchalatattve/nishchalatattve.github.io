# NordVPN 

```shell linenums="1" title="Installation"
sudo snap install nordvpn
```
```shell linenums="2" title="Login"
nordvpn login --token <token>
```

## Meshnet
```shell linenums="1" title="Enable Meshnet"
nordvpn set meshnet on
```
```shell linenums="1" title="Manage peers"
nordvpn meshnet peer list

nordvpn meshnet peer local allow <device>
nordvpn meshnet peer local deny <device>
```
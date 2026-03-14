---
icon: lucide/container
---
# Set up an environment for Python development
## [Miniconda]

  [Miniconda]: https://www.anaconda.com/docs/getting-started/miniconda/install#quickstart-install-instructions

## [uv]

  [uv]: https://docs.astral.sh/uv/

### Installation
```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Uninstallation
```shell title="1. Clean up stored data"
uv cache clean
rm -r "$(uv python dir)"
rm -r "$(uv tool dir)"
```

```shell title="2. Remove the uv, uvx, and uvw binaries"
rm ~/.local/bin/uv ~/.local/bin/uvx
```

### Start a project
```shell
uv init
```
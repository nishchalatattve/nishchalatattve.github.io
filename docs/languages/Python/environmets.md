---
icon: simple/python
---
# Set up environments
## [Miniconda]

  [Miniconda]: https://www.anaconda.com/docs/getting-started/miniconda/install#quickstart-install-instructions

## [uv]

  [uv]: https://docs.astral.sh/uv/

### Installation
```commandline
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Uninstallation
1. Clean up stored data:
```commandline
uv cache clean
rm -r "$(uv python dir)"
rm -r "$(uv tool dir)"
```

2. Remove the uv, uvx, and uvw binaries:
```commandline
rm ~/.local/bin/uv ~/.local/bin/uvx
```

### Add packages
```bash
uv add --dev <package> # (1)! 
```

1. The `--dev` flag means the added package will is for development only.
It will not be part of the requirement should the project be published as a package.


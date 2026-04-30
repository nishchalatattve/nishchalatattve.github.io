# Manage python runtime and packages
## uv

### Installation
```console
$ curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Common operations

```console title="Start a project"
$ uv init
```

```console title="Sync a project"
$ uv sync
```

```console title="Add a package" 
$ uv add <package>
```

??? tip "`--dev` flag"

    A common flag to use with `uv add` is the `--dev` flag.It signals the added
    package will is for development only.
    It will not be part of the requirement should the project be published as a 
    package.

```console title="Upgrade a package"
$ uv add "httpx>=0.1.0" --upgrade-package httpx
```
### Uninstallation
```console title="1. Clean up stored data"
$ uv cache clean
$ rm -r "$(uv python dir)"
$ rm -r "$(uv tool dir)"
```

```console title="2. Remove the uv, uvx, and uvw binaries"
$ rm ~/.local/bin/uv ~/.local/bin/uvx
```
### References

- Documentation [homepage]

  [homepage]: https://docs.astral.sh/uv/
## conda

### Common operations
```console title="Create environments"
$ conda create --name py35 python=3.5
```

### References

- Documentation [homepage]
- [Installation] (`miniconda`)
- [cheatsheet]

  [homepage]: https://www.anaconda.com/docs/main
  [Installation]: https://www.anaconda.com/docs/getting-started/miniconda/install#quickstart-install-instructions
  [cheatsheet]: https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf



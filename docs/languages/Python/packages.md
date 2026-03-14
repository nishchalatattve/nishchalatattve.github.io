---
icon: lucide/package-check
---

# Python package management

## uv
### Adding a package
```shell 
uv add <package>
```

??? tip "`--dev` flag"

    A common flag to use with `uv add` is the `--dev` flag.It signals the added
    package will is for development only.
    It will not be part of the requirement should the project be published as a 
    package.

### Upgrading an existing package
```shell 
uv add <package_version> --upgrade-package <package>
# For example,
uv add "httpx>=0.1.0" --upgrade-package httpx
```
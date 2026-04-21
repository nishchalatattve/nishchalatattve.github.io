# Git

## Remote

### Show remotes
```console title="Show remotes"
$ git remote 
origin
```

```console title="Show URL of a specific remote"
$ git remote show origin
* remote origin
    Fetch URL: git@github.com:nishchalatattve/nishchalatattve.github.io.git
    Push  URL: git@github.com:nishchalatattve/nishchalatattve.github.io.git
    ...
```

### Manage Remotes

```console title="Add a remote"
$ git remote add <remote_name> <remote_url>
```

```console title="Remove a remote"
$ git remote remove <remote_name>
```

```console title="Change URL"
$ git remote set-url <remote_name> <new_remote_url>
```

```console title="Change shortname"
$ git remote rename <original_name> <new_name>
```

## Submodule
### Add submodule to existing projects
```shell linenums="1"
$ git submodule add --depth 1 \ # (1)!
<upstream_url> <submodule_name>
```

1. `--depth 1` only downloads the latest commit.

The above steps only clone the submodule locally to make it available to the 
project,
```console
$ git submodule init
```
### Update submodules
To update the submodule to the latest commit on the tracked branch, after an upstream update.
```console
$ git submodule update --remote
```
### Clone git repository with submodules
```console 
$ git clone --recurse-submodules <repo-url>
```

## [LFS]

  [LFS]: https://git-lfs.com/

```console title="Track files"
$ git lfs track "*.pdf"
```

## [Sign commits] 
  [Sign commits]:https://docs.gitlab.com/user/project/repository/signed_commits/ssh/

## Miscellaneous

### Commit username and email
#### Get username and emails
```console title="Get username"
$ git config --get user.name
nishchalatattve
```

```console title="Get email"
$ git config --get user.email 
36802495+nishchalatattve@users.noreply.github.com
```
#### Set username and emails
=== "Set locally (in `.git/config`)"
    ```console title="Set username"
    $ git config user.name "<username>"
    ```

    ```console title="Set email"
    $ git config user.email "<email>"
    ```

=== "Set globally (in `~/.gitconfig`)"
    ```console title="Set username"
    $ git config --global user.name "<username>"
    ```

    ```console title="Set email"
    $ git config --global user.email "<email>"
    ```
### Completely separate commit history
When remote have a completely different commit history comparing to local, we cannot push directly. Instead, 
```console 
$ git pull <remote name> <remote branch> --allow-unrelated-histories
```

## References
- [Homepage]
- [Pro Git]
- [Oh Shit, Git!?!]
    
  [Homepage]: https://git-scm.com/
  [Pro Git]: https://git-scm.com/book/en/v2
  [Oh Shit, Git!?!]: https://ohshitgit.com/
# git

## Remote
### Checking remotes
```shell linenums="1"
git remote 
```
??? info "Output"

    ```text
    * remote origin
      Fetch URL: https://github.com/nishchalatattve/nishchalatattve.github.io.git
      Push  URL: https://github.com/nishchalatattve/nishchalatattve.github.io.git
      HEAD branch: main
      Remote branch:
        main tracked
      Local branch configured for 'git pull':
        main merges with remote main
      Local ref configured for 'git push':
        main pushes to main (up to date)
    ```
To dig further into a specific remote
=== "Definition"
    ```shell linenums="1"
    git remote show <branch_shortname>
    ```
=== "Examples"
    ```shell linenums="1"
    git remote show origin
    ```
??? info "Output"

    ```text
    * remote origin
      Fetch URL: git@github.com:nishchalatattve/nishchalatattve.github.io.git
      Push  URL: git@github.com:nishchalatattve/nishchalatattve.github.io.git
      HEAD branch: main
      Remote branch:
      main tracked
      Local branch configured for 'git pull':
      main merges with remote main
      Local ref configured for 'git push':
      main pushes to main (up to date)
    ```

### Managing Remotes
#### Adding a remote
=== "Definition"
=== "Examples"
```shell
git remote add <remote_name> <remote_url>
# For example,
git remote add origin git@github.com:nishchalatattve/nishchalatattve.github.io.git
```
#### Removing a remote
```shell
git remote remove <remote_name>
# For example,
git remote remove paul
```
#### Changing remote URL
```shell
git remote set-url <remote_name> <new_remote_url>
# For example,
git remote set-url origin git@github.com:nishchalatattve/nishchalatattve.github.io.git
```
#### Changing remote shortname
```shell
git remote rename <original_name> <new_name>
# For example,
git remote rename pb paul
```

## Commit username and email
### Get username and emails
```shell title="Get username"
git config --get user.name
```
??? info "Output"

    ```text
    nishchalatattve
    ```
```shell title="Get email"
git config --get user.email 
```

??? info "Output"

    ```text
    136802495+nishchalatattve@users.noreply.github.com
    ```
### Set username and emails
=== "Set locally (in `.git/config`)"
    ```shell title="Set username"
    git config user.name "<username>"
    ```

    ```shell title="Set email"
    git config user.email "<email>"
    ```

=== "Set globally (in `~/.gitconfig`)"
    ```shell title="Set username"
    git config --global user.name "<username>"
    ```

    ```shell title="Set email"
    git config --global user.email "<email>"
    ```


## Completely separate commit history
When remote have a completely different commit history comparing to local, we cannot push directly. Instead, 
=== "Definition"
    ```shell linenums="1"
    git pull <remote name> <remote branch> --allow-unrelated-histories
## Submodule
### Add submodule to existing projects
```shell
git submodule add --depth 1 \ # (1)!
<upstream_url> <submodule_name>
# For example,
git submodule add --depth 1 \
https://github.com/marzer/tomlplusplus.git tomlplusplus 
```

1. `--depth 1` only downloads the latest commit.

The above steps only clone the submodule locally to make it available to the 
project,
```shell
git submodule init
```
### Update submodules
To update the submodule to the latest commit on the tracked branch,
```shell
git submodule update --remote
```
To update the submodule to the latest commit tracked in the super repository
```shell
git submodule update --remote # (1)!
# For example,
git submodule update --remote --merge
```

1. This is usually performed after the upstream repository has been updated.

### Clone git repository with submodules
```shell
git clone --recurse-submodules <repo-url>
```



    
=== "Examples"
    ```shell linenums="1"
    git pull personal main --allow-unrelated-histories

## References
- [Git]
- [Pro Git]
- [Oh Shit, Git!?!]
- [Sign off commits]
- [Git LFS]
    
  [Git]: https://git-scm.com/
  [Pro Git]: https://git-scm.com/book/en/v2
  [Oh Shit, Git!?!]: https://ohshitgit.com/
  [Sign off commits]:https://docs.gitlab.com/user/project/repository/signed_commits/ssh/
  [Git LFS]: https://git-lfs.com/
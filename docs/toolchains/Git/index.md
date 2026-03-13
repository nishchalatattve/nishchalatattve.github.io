# [Git]

  [Git]: https://git-scm.com/
## Tips
### Completely separate commit history
When you initialise a repository on remote (GitLab), and made several commits to edit README, it is now messy to push your local, which has a completely different commit history, to remote.
To solve this issue.
```shell
git pull <remote name> <remote branch> --allow-unrelated-histories
# For example,
git pull personal main --allow-unrelated-histories
```
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
```shell
git submodule update --remote
```
### Clone git repository with submodules
```shell
git clone --recurse-submodules <repo-url>
```

## Remote
### Checking remotes
To check the URL of remotes:
```shell
$ git remote -v 
origin  git@github.com:nishchalatattve/nishchalatattve.github.io.git (fetch)
origin  git@github.com:nishchalatattve/nishchalatattve.github.io.git (push)
```
To dig further into a specific remote:
```shell
$ git remote show origin
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
### Get username
```shell
$ git config --get user.name
nishchalatattve
```
### Get email 
```shell
git config --get user.email \
136802495+nishchalatattve@users.noreply.github.com
```
### Set username 
=== "Set in `.git/config`"
    ```bash
    git config user.name "<username>"
    ```

=== "Set in `~/.gitconfig`"
    ```bash
    git config --global user.name "<username>"
    ```
### Set email 
=== "Set in `.git/config`"
    ```bash
    git config user.email "<email>"
    ```

=== "Set in `~/.gitconfig`"
    ```bash
    git config --global user.email "<email>"
    ```

## References
- [Pro Git](https://git-scm.com/book/en/v2)
- [Oh Shit, Git!?!](https://ohshitgit.com/)
- [Sign off commits](https://docs.gitlab.com/user/project/repository/signed_commits/ssh/)
- [Git LFS](https://git-lfs.com/)


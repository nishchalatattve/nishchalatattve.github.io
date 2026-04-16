# ssh 

## Generate keys
=== "General"
    ```console 
    $ ssh-keygen -t <type> -f ~/.ssh/<filename> -C <username>
    ```

=== "For use with `gcloud compute ssh`"
    ```console
    $ ssh-keygen -t rsa -f ~/.ssh/google_compute_engine -C ubuntu
    ```
    
=== "For use with GitHub"
    ```console
    $ ssh-keygen -t ed25519 -f ~/.ssh/github
    ```

## Modify passphrase
```console
$ ssh-keygen -p -f ~/.ssh/<filename>
```

## Connect to remote
```console
$ ssh -i ~/.ssh/<key_name> <username>@<instance_ip>
```
## Activate SSH agent
```shell linenums="1"
eval `ssh-agent -s`
ssh-add ~/.ssh/github
ssh -T git@github.com
```

!!! info
    To avoid typing the above every time, add the following to `~/.ssh/config`.
    ```text linenums="1"
    Host github.com
      User git
      IdentityFile ~/.ssh/github
      AddKeysToAgent yes
    ```

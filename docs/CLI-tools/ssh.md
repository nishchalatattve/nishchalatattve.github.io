# SSH 

## Generate keys
=== "General"
    ```shell linenums="1"
    ssh-keygen -t <type> -f ~/.ssh/<filename> -C <username>
    ```

=== "For use with `gcloud compute ssh`"
    ```shell linenums="1"
    ssh-keygen -t rsa -f ~/.ssh/google_compute_engine -C ubuntu
    ```
    
=== "For use with GitHub"
    ```shell linenums="1"
    ssh-keygen -t ed25519 -f ~/.ssh/gitlub
    ```

## Modifying passphrase
```shell linenums="1"
ssh-keygen -p -f ~/.ssh/<filename>
```

## Connect to remote
=== "General"
    ```shell linenums="1"
    ssh -i ~/.ssh/<key_name> <username>@<instance_ip>
    ```

=== "GCP"
    ```shell linenums="1"
    gcloud compute ssh <username>@<instance_name>
    ```
## Activate SSH agent
```shell linenums="1"
eval `ssh-agent -s`
ssh-add ~/.ssh/github
ssh -T git@github.com
```

!!! info
    To avoid typing the above every time, add the following to `~/.ssh/config`.
    ```text
    Host github.com
      User git
      IdentityFile ~/.ssh/github
      AddKeysToAgent yes
    ```

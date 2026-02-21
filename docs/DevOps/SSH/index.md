# SSH 

## Generate keys
=== "General"
    ```bash
    ssh-keygen -t <type> -f ~/.ssh/<filename> -C <username>
    ```

=== "For use with `gcloud compute ssh`"
    ```bash
    ssh-keygen -t rsa -f ~/.ssh/google_compute_engine -C ubuntu
    ```
    
=== "For use with GitHub"
    ```bash
    ssh-keygen -t ed25519 -f ~/.ssh/gitlub
    ```

## Modifying passphrase
```bash
ssh-keygen -p -f ~/.ssh/<filename>
```

## Connect to remote
=== "General"
    ```bash
    ssh -i ~/.ssh/<key_name> <username>@<instance_ip>
    ```

=== "GCP"
    ```bash
    gcloud compute ssh <username>@<instance_name>
    ```
## Activate SSH agent
```bash
eval `ssh-agent -s`
ssh-add ~/.ssh/github
ssh -T git@github.com
```
To avoid typing the above every time, add the following to `~/.ssh/config`.
```text
Host github.com
  User git
  IdentityFile ~/.ssh/github
  AddKeysToAgent yes
```

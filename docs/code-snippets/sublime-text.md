# Sublime text

## [Projects]

  [Projects]: https://www.sublimetext.com/docs/projects.html
```json linenums="1" title=".sublime-project"
{
    "folders":
    [   
        {
            "path": ".",
            "name": "root",
            "follow_symlinks": true,
        },
    ],

}
```
Other attributes of `folders` item.
```json linenums="1"
"file_exclude_patterns": ["*.synctex.gz"],
"folder_exclude_patterns": ["__pycache__", ".ipynb_checkpoints"],
```
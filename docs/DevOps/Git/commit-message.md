---
icon: simple/git
---
# Commit message standards
Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
```text
<type>[optional scope]: <description> (#[optional issue number])

[optional body]

[optional footer(s)]
```
For example:
```text
feat(api)!: send an email to the customer when a product is shipped
```

## `type`
`<type>` can be any of:
```text
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

- Changes relevant to the API or UI:
    - `feat` Commits that add, adjust or remove a new feature to the API or UI
    - `fix` Commits that fix an API or UI bug of a preceded `feat` commit
- `refactor` Commits that rewrite or restructure code without altering API or UI behavior
    - `perf` Commits are special type of `refactor` commits that specifically improve performance
- `style` Commits that address code style (e.g., white-space, formatting, missing semi-colons) and do not affect application behavior
- `test` Commits that add missing tests or correct existing ones
- `docs` Commits that exclusively affect documentation
- `build` Commits that affect build-related components such as build tools, dependencies, project version, ...
- `ci` Commits that affect operational aspects like infrastructure (IaC), deployment scripts, CI/CD pipelines, backups, monitoring, or recovery procedures, ...
- `chore` Commits that represent tasks like initial commit, modifying `.gitignore`, ...

## `scope`
A scope MAY be provided after a type. 
A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., fix(parser):

## `description`
The commit description starts with lowercase and does not end with punctuation (it is not a full sentence).


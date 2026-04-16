# Regular expressions

## Anchors

| RegEx | Description     |
|-------|-----------------|
| `^`   | start of string |
| `$`   | end of string   |

## Character classes

| RegEx | Description              |
|-------|--------------------------|
| `\s`  | whitespace character     |
| `\S`  | non-whitespace character |
| `\d`  | decimal digit            |
| `\D`  | not a decimal digit      |
| `\w`  | word character           |
| `\W`  | not a word character     |

## Quantifiers

| RegEx   | Description                 |
|---------|-----------------------------|
| `*`     | 0 or more times             |
| `+`     | 1 or more times             |
| `?`     | 0 or 1 times ([non-greedy]) |
| `{n}`   | exactly n times             |
| `{n,}`  | at least n times            |
| `{n,m}` | between n and m times       |

  [non-greedy]: https://stackoverflow.com/questions/2301285/what-do-lazy-and-greedy-mean-in-the-context-of-regular-expressions

## Groups

| RegEx            | Description             |
|------------------|-------------------------|
| `(<exp>)`        | indexed capturing group |
| `(?<name><exp>)` | named capturing group   |


## References
- [RegEx 101]

  [RegEx 101]: https://regex101.com
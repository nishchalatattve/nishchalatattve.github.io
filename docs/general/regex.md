# Regular expressions

## Anchors
- `^`: start of string
- `$`: end of string

## Character classes
- `\s`: whitespace character
- `\S`: non-whitespace character

## Quantifiers
- `*`: 0 or more times
- `+`: 1 or more times
- `?`: 0 or 1 times.
Essentially this is a [non-greedy] quantifier.
- `{n}`: exactly n times
- `{n,}`: at least n times
- `{n,m}`: between n and m times

  [non-greedy]: https://stackoverflow.com/questions/2301285/what-do-lazy-and-greedy-mean-in-the-context-of-regular-expressions

## Groups
- `(<exp>)`: indexed group


## References
- [RegEx 101]

  [RegEx 101]: https://regex101.com
---
icon: simple/markdown
---
# Markdown 
> Originally Written by the Zensical Team.
> Adopted by the author.

[Markdown] was originally developed by John Gruber in 2004 as "a text-to-HTML conversion tool for web writers".
The aim of Markdown is to allow users to write in an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML.

  [Markdown]: https://daringfireball.net/projects/markdown/

There is no common standards for Markdown, but the following dialects are worth checking out:

- [Zensical]
- [CommonMark]
- [GitHub]

  [Zensical]: https://zensical.org/docs/authoring/markdown/
  [CommonMark]: https://commonmark.org/
  [GitHub]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github

## Headers
```
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```

## Text formatting
```
**bold text**
*italic text*
***bold and italic***
~~strikethrough~~
`inline code`
```

## Links and images
```
[Link text](https://example.com)
[Link with title](https://example.com "Hover title")
![Alt text](image.jpg)
![Image with title](image.jpg "Image title")
```

## Lists
```
Unordered:
- Item 1
- Item 2
  - Nested item

Ordered:
1. First item
2. Second item
3. Third item
```

## Blockquotes
```
> This is a blockquote
> Multiple lines
>> Nested quote
```

## Code blocks
````
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

## Tables
```
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

## Horizontal rule
```
---
or
***
or
___
```

## Task lists
```
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

## Escaping characters
```
Use backslash to escape: \* \_ \# \`
```

## Line breaks
```
End a line with two spaces  
to create a line break.

Or use a blank line for a new paragraph.
```
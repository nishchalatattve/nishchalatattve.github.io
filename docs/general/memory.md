# Memory in computers

`0` and `1` are called *bits*. Eight bits are called a *byte*.

## Decimal, binary and hexadecimal

!!! abstract "Definitions"

    ```text title="decimal"
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ```
    ```text title="binary (0b)"
    0, 1
    ```
    ```text title="hexadecimal (0x)"
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f
    ```

!!! question "Why hexadecimal?"

    `0xf` = `0b1111`, `0xe` = `0b1110` ... we can represent a hexadecimal number 
    with 4 bits.

!!! example "Conversion examples"

    ```text
    128 = 0b10000000 = 0x80
    ```

## Text encoding

Traditionally, ASCII assigns a number (between 0 and 127) to each character.
(0-31) are control characters, such as `\n` = `LF` = `Line feed` = `10` =
`0b00001010`= `0x0a`. 32-126 are printable characters, for example `A` = `65` =
`0b01000001` = `0x41`.

??? tip "Line termination"

    Common line terminations sequence are
    
    | DEC  | Symbol 1 | Description     | Escape sequence |
    |------|----------|-----------------|-----------------|
    | `10` | `LF`     | Line feed       | `\n`            |
    | `13` | `CR`     | Carriage return | `\r`            |
    
    This convention comes from old printers.
    > On old printers, \r, carriage return, sent the print head back to the start of 
    > the line, and \n advanced the paper by one line. Both were therefore necessary to start printing on 
    > the next line.
    
    Different operating systems use different line terminations.
    
    | Windows        | Unix and modern Mac OS | Classic Mac OS |
    |----------------|------------------------|----------------| 
    | `CRLF`, `\r\n` | `LF`, `\n`             | `CR`, `\r`     |
    
    See also:

    - [The Stack Overflow discussion] on this topic
    
    [The Stack Overflow discussion]:https://stackoverflow.com/questions/1552749/difference-between-cr-lf-lf-and-cr-line-break-types


See also:

- [ASCII table]

  [ASCII table]:https://www.ascii-code.com/
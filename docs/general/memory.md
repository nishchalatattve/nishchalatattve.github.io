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
## Integer representation
### Unsigned integer
Unsigned integers are represented simply as binaries. For example, `0b0001` = `1`.
### 2's complement
A common implementation of signed integer representation is *2's complement*. The
procedure is as follows, 

1. Write down the binary representation of the number without the negative sign.
2. Chang the first bit to signal the sign: `0` for positive and `1` for negative.
3. Flip the remaining bits: `0` => `1`, and vice versa.
4. Add 1, discard any overflow digits.

!!! example "Represent -7 in signed 4 bits"
    We start with four empty bits
    ```text title="Step 0"
    _, _, _, _
    ```
    ```text title="Step 1"
    0, 1, 1, 1
    ```
    ```text title="Step 2"
    1, 1, 1, 1
    ```
    ```text title="Step 3"
    1, 0, 0, 0
    ```
    ```text title="Step 3"
    1, 0, 0, 1
    ```

??? question "Why use 2's complement?"
    A naive way to represent a signed integer is to use the first bit to represent the 
    sign and the rest to represent the magnitude. But this results in 0 having 2 
    representations (`0b0000` and `0b1111` in 4-bit representation). 2's complement 
    solves the problem (`0` is represented only as `0b0000`). Additonally, it has other 
    niceties to reduce algorithmic complexity when implementing arithmetics.
  
### Maximal number in 32-bits representation
For unsigned integer, the maximum number in 32-bits representation is
\(2 \times 10 ^{32} - 1\), which is approximately 4 bn.
For signed integer, that number reduces to about 2 bn (\(2 \times 10 ^{31} - 1\)).

!!! note "Beyond 32-bits"

    The maximal number of a signed integer a 64-bit system can represent is about 9
    quintillion (\(9 \times 10^{18}\))
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
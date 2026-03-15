# Variables in C++
Fundamental variable types in C++ are:

- `int`
- `float`
- `double`
- `char`
- `bool`

```c++ title="Initialising variables with default values" linenums="1"
int a{};    // a = 0
float b {}; // b = 0
double c {};    // c = 0
char d {};  // d = '\0'
bool e {};  // e = 0
```
```c++ title="Initialising variables with custom values" linenums="1"
int a = 9;    
float b = 123.4; 
double c = 123.4;    
char d = "H";  
bool e = true;  
```
??? failure "Declare variables without an initial value"
    In C++, you can declare variables without an initial value. 
    ```c++ linenums="1"
    int x;
    ```
    However, this is discouraged as it leads to undefined behaviour.
    ```c++ linenums="2"
    std::cout << x << std::endl;
    ```
    !!! info "Output"
        === "Ubuntu"
            ```text
            32767
            ```
        
        === "macOS"
            ```text
            1
            ```

We may check the size of variables with `sizeof`. It prints out the size of the
variable in bytes.
```c++ title="Checking variable size" linenums="1"
int a{};
std::cout << sizeof(a) << std::endl;
```
!!! info "Output"
    ```text
    4
    ```
The size of fundenmental types is implementation defined, but common values are

| Type        | Size    |
|-------------|---------|
| `int`       | 4 bytes |
| `float`     | 4 bytes |
| `double`    | 8 bytes |
| `char`      | 1 byte  |
| `bool`      | 1 byte  |

## `int`, `float`, and `double`
### `int`
We have seen the most basic int literal
```c++ linenums="1"
int a = 42;
```
Additionally, we may use `'` to separate digits for readability.
```c++ linenums="1"
int a = 36'000'000;
```
Moreover, we may pass in digits as binary or hexadecimal.
```c++ linenums="1"
int a = 0x3fff; // 16383 in decimal
int b = 0b0011111111111111; // Also 16383 in decimal
```
By default, `int` is signed 32-bits in C++. To signal the integer is unsigned, we
may use `unsigned` (also 32-bits). In this case, we shall add suffix `u`.
```c++ linenums="1"
unsigned a = 42u;
```
To represent integers beyond 2 bn, (maximum of `int`), we may use the 64-bit signed
integer, `long`. It can represent numbers up to 9 quintillion (18 zeros).
In this case, we shall add suffix `l`.
```c++ linenums="1"
long a = 42l;
```
We can also use `unsigned long` etc., and add the corresponding suffix.
```c++ linenums="1"
unsigned long val_3 = 0776745ul;
```

#### Fixed width `int`

Although we are almost garanteed to find `int` to be 32-bit, `long` to be 64-bit in
most modern systems, it is not garanteed. To ensure a number to be of certain bits,
we need to use **Fixed width integer types**.

- `int64_t`
- `uint32_t`
- ...


??? info "Equivalent types"

    - `int`: `signed`
    - `unsigned int`: `unsinged`
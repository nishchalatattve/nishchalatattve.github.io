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
```c++
uint32_t a = 0b00000000000000000000000000000001;
std::cout << a << std::endl;   
```
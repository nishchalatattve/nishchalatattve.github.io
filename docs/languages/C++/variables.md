# Variables in C++
Fundamental variable types in C++ are:

- `int`
- `float`
- `double`
- `char`
- `bool`

In C++, you can declare variables without an initial value. 
```c++ title="Declaring variables without an initial value"
int x;
```
However, this is discouraged as it leads to undefined behaviour.
```c++ title="Undefined behaviour"
int x;
std::cout << x << std::endl;
```
!!! failure "Output"
    === "Ubuntu"
        ```text
        32767
        ```
    
    === "macOS"
        ```text
        1
        ```
!!! info "Bracket initiation"
    
    To prevent this undefined behavour, you may use **bracket initiation** for
    variables without a good initial value.

```c++ title="Bracket initiation"
int x{};
std::cout << x << std::endl;
```

!!! info "Output"

    ```text
    0
    ```

Here are the default values of fundamental types in C++.

| Type     | Value |
|----------|-------|
| `int`    | `0`   |
| `float`  | `0`   |
| `double` | `0`   |
| `char`   | `\0`  |
| `bool`   | `0`   |
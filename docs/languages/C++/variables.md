# Variables in C++
Fundamental variable types in C++ are:

- `int`
- `float`
- `double`
- `char`
- `bool`

In C++, you can declare variables without a initial value. 
```c++ title="Declaring variables without a initial value"
int x;
```
However, this is discouraged as it leads to undefined behaviour.
```c++ title="Undefined behaviour"
int x;
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
# Memory in C++

## Size of fundamental types
| Type        | Size    |
|:------------|---------|
| `char`      | 1 byte  |
| `int`       | 4 bytes |
| `float`     | 4 bytes |
| `double`    | 8 bytes |
| `long`      | 8 bytes |
| `long long` | 8 bytes |
| `short`     | 2 bytes |
| `bool`      | 1 byte  |
## Memory management
```c++ title="Manual memory allocation with new"
int* ptr = new int;
```
This first `int` signals `ptr` points to an integer, while the second `int`
tells to compiler to allocate memory space for an integer to `ptr`. Memory
allocated via the `new` keyword must be mannually freed with `delete`.
```c++ title="Freeing memory with delete"
delete ptr;
```
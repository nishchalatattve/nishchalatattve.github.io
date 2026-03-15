# Memory in C++

```c++ title="Manual memory allocation with new"
int* ptr = new int;
```
This first `int` signals `ptr` points to an integer, while the second `int`
tells to compiler to allocate memory space for an integer to `ptr`. Memory
allocated via the `new` keyword must be mannually freed with `delete`.
```c++ title="Freeing memory with delete"
delete ptr;
```
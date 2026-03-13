# References and pointers
Pointers are the memory address of an object.
```c++ title="Baisc example of references and pointers"
int number = 4;

int &reference1 =  number;
std::cout << reference1 << std::endl;    // Output: 4

int *address = &number;
std::cout << address << std::endl;  // 0x16d06ee3c
```
In this example, `address` is a pointer. `*address` is an operation called _pointer 
deferencing_, it returns the value stored in the pointer.

A special type of pointer is the *null pointer*, `nullptr`. It does not point to 
any address and can cause undefined behaviour when dereferenced.
```c++ title="Null pointer example"
int *null_pointer = nullptr;
```
## Memory management

[//]: # (Memory allocated by standard declarations is automatically freed when the program )

[//]: # (exits. But in C++, we can also allocate memory manually, but we must free it manually.)

[//]: # (```c++ title="Manual memory allocation")

[//]: # (int *ptr = new int&#40;4&#41;;)

[//]: # (```)


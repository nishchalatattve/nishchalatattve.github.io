# Control flows in C++

## `if-else`
```c++ linenums="1" title="if-else statement"
int a;
std::cout << "Enter a number: ";
std::cin >> a;

if (constexpr int b = 0; a == 99) {
    std::cout << "Congrats you hit the jackpot!" << std::endl;
} else if (a > b) {
    std::cout << a << " is greater than " << b << std::endl;
} else if (a < b) {
    std::cout << a << " is less than " << b << std::endl;
} else {
    std::cout << a << " is equal to " << b << std::endl;
}
```

## `for` loop
```c++ linenums="1" title="Postfix for loop"
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}
```
```c++ linenums="1" title="Prefix for loop"
for (int i = 0; i < 5; ++i) {
    std::cout << i << std::endl;
}
```

!!! note "Prefix vs Postfix"
    `a++` is known as postfix: add `1` to `a`, returns the *old* value. `++a` is 
    known as prefix: add `1` to `a`, returns the *new* value. 

```c++ linenums="1" title="Range-based for loop"
for (const int i: {1, 2, 3, 4, 5}) {
    std::cout << i << std::endl;
}
```

## `while` loop
```c++ linenums="1" title="while loop"
int i = 0;
while (i < 10) {
    std::cout << i++ << std::endl;
}
```
```c++ linenums="1" title="do-while loop"
int j = 0;
do {
    std::cout << j++ << std::endl;
} while (j < 5);
```

!!! note "`while` vs `do-while`"

    `while` loop is extry controlled: the content of the loop will be executed
    only if the condition(s) is(are) met. `do-while` loops are exit controlled.
    The content is garanteed to be executed at least once.
# Tab groups
=== "C"

    ```c
    #include <stdio.h>
    
    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ```c++
    #include <iostream>
    
    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
=== "JavaScript"

    ```js 
    const greeting = "Hello, World!"; // [!code ++]
    function sayHello() {
      console.log("Hello, World!"); // [!code --]
      console.log(greeting); // [!code ++]
    }
    sayHello();
    ```
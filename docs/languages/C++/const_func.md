# `const` member functions

`const` member functions are functions which do not modify the object.
For example, consider a class describing a radioactive source.
```c++
class Source {
private:
  std::string name_{}; // Source name. e.g. Na-22, Cs-136, Co-92
public:
  Source(std::string name){
      name_ = name;
  }
  [[nodiscard]] std::string name() const;
```
In this setup, we have a getter that does not modify the object so it makes sense to mark it as `const`.
`[[nodiscard]]` tells the compiler to issue a warning if the function is called 
but the return value is not used.
For example,
```c++
Source source("Na-22");

std::string name = source.name();   // This is ok.
source.name();  // Compiler will issue a warning.
```


## References
- [GeekforGeeks article]
- [StackOverflow post]

  [GeekforGeeks article]: https://www.geeksforgeeks.org/cpp/const-member-functions-c/
  [StackOverflow post]: https://stackoverflow.com/questions/3141087/what-is-meant-with-const-at-end-of-function-declaration
## Templates in C++

```c++ title="function templates"  linenums="1"
template <typename T>
T Add(T a, T b) {
  return a + b;
}

int main() {
  std::cout << Add<int>(5, 3) << "\n";
  std::cout << Add<double>(2.5, 1.5) << "\n";
  return 0;
}
```
```c++ title="function templates"  linenums="1"
template <typename To, typename From>
To Add(From a, From b) {
  return a + b;
}

int main() {
  std::cout << Add<int>(5, 3) << "\n";
  std::cout << Add<double>(2.5, 1.5) << "\n";
  return 0;
}
```
```c++ title="class templates" linenums="1"
template <typename T>
class Box {
  public:
    T value;
    Box(T v) {
      value = v;
    }
    void show() {
      std::cout << "Value: " << value << "\n";
    }
};

int main() {
  Box<int> int_box(50);
  Box<std::string> str_box("Hello");

  int_box.show();
  str_box.show();
  return 0;
}
```
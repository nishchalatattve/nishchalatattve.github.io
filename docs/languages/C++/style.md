---
icon: simple/cplusplus
---
# C++ style guide

Follow [Google's C++ style guide].

[Google's C++ style guide]: https://google.github.io/styleguide/cppguide.html

Including:

- Targeting the C++20 standard.

## Naming conventions
### File names
Filenames should be all lowercase and can include underscores (_) or dashes (-).
Follow the convention that your project uses. If there is no consistent local pattern to follow, prefer "_".
C++ files should have a `.cc` filename extension, and header files should have a `.h` extension.
For example:
```text
myusefulclass_test.cc 
```
### Class struct, and function names
- Use `PascalCase` for class, struct and function names.
- Accessors and mutators (get and set functions) may be named like variables, in `snake_case`.
### Namespace names
- Use `snake_case`.
### Constant names
Variables declared `constexpr` or `const`, and whose value is fixed for the duration of the program, are named with a leading "`k`" followed by mixed case.
Underscores can be used as separators in the rare cases where capitalization cannot be used for separation. For example:
```c++
const int kDaysInAWeek = 7;
const int kAndroid8_0_0 = 24;  // Android 8.0.0
```
### Variable names
- Use `snake_case` for variables(including function parameters), and data members.
  Data members of classes (but not structs) additionally have trailing underscores.
  For instance: `a_class_data_member_`.

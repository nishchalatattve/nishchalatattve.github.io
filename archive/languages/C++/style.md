---
icon: lucide/chess-king
---
# C++ style guide
Follow [Google's C++ style guide], including targeting the C++20 standard.
  [Google's C++ style guide]: https://google.github.io/styleguide/cppguide.html

## Naming conventions
### Variable names
- `snake_case` for variables 
- `kPascalCase` for constants
- `snakey_case_` for data members of classes or structs.
### Class struct, and function names
- `PascalCase` for class, struct and function names.
- Accessors and mutators (get and set functions) may be named like variables.
### Namespace names
- `snake_case`.
### File names
- `snake_case` for names
- `.cc` for source file, `.h` for header extensions.
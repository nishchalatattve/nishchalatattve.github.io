# Value categories
## Introduction
Each expression in C++ have two properties: a type and a *value category*.
Here is an overview of the category type

``` mermaid
graph TD
  A[Expression] --> B[glvalue]
  A --> C[rvalue]

  B --> D[lvalue]
  B --> E[xvalue]

  C --> E
  C --> F[prvalue]
```

## Primary categories
### `prvalue`
Expressions have `prvalue` if they perform 'computation' (`+, -, *, |, &, ...`) or initialise an object.
Here are some examples of `prvalue`

- `a+b`
- `&b`
- `this->m`, ONLY when `m` is a member enumerator or a non-static member function.

### `xvalue` and `lvalue`
To introduce `xvalue` and `lvalue`, we first need to present `glvalue`. `glvalue` is an expression whose evaluation determines the values of an object. `xvalue` is a `glvalue` that denotes an object whose resource can be used. For example, 

- `a[i]`
- `a.m`
- `std::move`

`lvalue` is a `glvalue` that does not have a `xvalue`. For example,

- `int a`
- `this->m`, EXCEPT when `m` is a member enumerator or a non-static member function.

## Mixed categories
### `glvalue`
A `glvalue` expression is either `lvalue` or `xvalue`.
### `rvalue`
An `rvalue` expression is either `prvalue` or `xvalue`.

Properties:

- An `rvalue` can't be used as the left-hand operand of the built-in assignment
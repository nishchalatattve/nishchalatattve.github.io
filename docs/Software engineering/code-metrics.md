---
title: Code metrics
---
# Code metrics: what is good code?

## Philosophies
!!! important
    There is only **TWO** rule in code metrics: 

    - The less TOTAL time one spend on the code (maintaining+developing), the better the code quality.
    - The more convenient user felt, the better the code quality.

Other considerations for code quality includes

- Development speed
- Readability
- Maintainability
- Code performance

## Rules
The rules are not to be strictly followed. It is more important to understand the 
motivation behind them.

### General

- The less decision logic, the better
- The less nested logics are, the better
- The fewer variables there are, the better

### OOP specific

- Balance of *depths of inheritance* in classes

[//]: # (- Class cohesion and coupling)

## References

- [Microsoft's guide] to code metrics
- [Cognitive complexity]

  [Microsoft's guide]: https://learn.microsoft.com/en-us/visualstudio/code-quality/code-metrics-values?view=visualstudio
  [Cognitive complexity]: https://www.sonarsource.com/blog/cognitive-complexity-because-testability-understandability/
# Numpy

## Basics
```python linenums="1" title="arange"
# Definition
np.arange(start, stop, step)


# Example
a = np.arange(0, 5, 1)
print(a)
```
!!! info "Output"
    ```text
    array([0, 1, 2, 3, 4])
    ```
```python linenums="1" title="linspace"
# Definition
numpy.linspace(start, stop, num=50, endpoint=True)

# Example
a = np.linspace(0, 5, 5)
```
!!! info "Output"
    ```text
    array([0.  , 1.25, 2.5 , 3.75, 5.  ])
    ```
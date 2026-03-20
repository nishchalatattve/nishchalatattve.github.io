# Numpy

## Array creation
### `arange`
=== "Definition"
    ```python linenums="1"
    np.arange(start, stop, step)
    ```
=== "Examples"
    ```python linenums="1"
    a = np.arange(0, 5, 1)
    print(a)
    ```
    !!! info "Output"
        ```text
        array([0, 1, 2, 3, 4])
        ```

### `linspace`
=== "Definition"
    ```python linenums="1"
    np.linspace(start, stop, num=50, endpoint=True)
    ```
=== "Examples"
    ```python linenums="1"
    a = np.linspace(0, 5, 5)
    ```
    !!! info "Output"
        ```text
        array([0.  , 1.25, 2.5 , 3.75, 5.  ])
        ```
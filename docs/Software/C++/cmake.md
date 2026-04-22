# cmake
## Common operations

```console title="Generate a build system in a dir called build"
$ cmake -B build
```

```console title="Build the project"
$ cmake --build build
```

```console title="Run the executable"
$ ./build/hello
```

## Common CMLs

```text linenums="1" title="Building an executable"
add_executable(MyProgram)

target_sources(MyProgram
  PRIVATE
    main.ccc
)
```

```text linenums="1" title="Building a library"
add_library(MyLibrary)

target_sources(MyLibrary
  PRIVATE
    library_implementation.cc

  PUBLIC
    FILE_SET HEADERS
    BASE_DIRS
      include
    FILES
      include/library_header.h
)
```

```text linenums="1" title="Linking together libraries and executables"
target_link_libraries(MyProgram
        MyLibrary
)
```

## References

- [Tutorial]

  [Tutorial]: https://cmake.org/cmake/help/latest/guide/tutorial/index.html
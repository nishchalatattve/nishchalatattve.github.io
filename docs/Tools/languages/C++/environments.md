---
icon: lucide/container
---
# Set up an environment for C++ development
C++ is a compiled language.
The GNU Compiler Collection (GCC) is a set of compilers for programming languages,
including C, C++, Assembly, and many more. It is the de facto standard in Linux
environments and is used to compile both the GNU toolchain and the Linux kernel.

## Installing compilers
=== "linux"

    ```bash
    sudo apt install gcc g++
    ```

=== "macos"

    ```bash
    xcode-select --install
    ```

If you want a specific version of `g++`, you may install it by
```bash
sudo apt install g++-<version>
```
for example
```bash
sudo apt install g++-13
```

An alternative, but common approach is to install the `build-essential` 
package, which is a collection of common tools including `gcc`, `g++`, and `make`.

## Installing build tools (`make`, backend for `cmake`)
```bash
sudo apt install make
```

## Installing build systems (`cmake`)

Setting up [cmake APT repository] from kitware.

  [cmake APT repository]: https://apt.kitware.com/
```bash
sudo apt-get install cmake
```

## References

- [The ubuntu guide]

  [The ubuntu guide]: https://documentation.ubuntu.com/ubuntu-for-developers/howto/gcc-setup/#install-gcc

---
icon: simple/cplusplus
---

# [Set up a development environment for C++ on Ubuntu](https://documentation.ubuntu.com/ubuntu-for-developers/howto/gcc-setup/#install-gcc)
C++ is a compiled language.
The GNU Compiler Collection (GCC) is a set of compilers for programming languages, including C, C++, Assembly, and many more. It is the de facto standard in Linux environments and is used to compile both the GNU toolchain and the Linux kernel.

## 1. Installing GCC compilers for C and C++:
```commandline
sudo apt install gcc g++
```
If you want a specific version of `g++`, you may install it by
```commandline
sudo apt install g++-<version>
```
for example
```commandline
sudo apt install g++-13
```
An alternative, but common approach is to install the [`build-essential`](https://itsfoss.com/build-essential-ubuntu/) package, which is a collection of common tools including `gcc`, `g++`, and `make`.

## 2. Installing debuggers (`gdb`)
The standard debugger developed for GCC is the GNU Debugger (GDB).
To install it,
```commandline
sudo apt install gdb
```

## 3. Installing build tools (`make`, backend for `cmake`)
```commandline
sudo apt install make
```

## 4. Installing build systems (`cmake`)
Setting up cmake APT repository from kitware: https://apt.kitware.com/
```commandline
sudo apt-get install cmake
```
# General topics in \(\LaTeX\)
## Robustness of macros
**`\newocmmand` vs `\NewDocumentCommand`**

`\NewDocumentCommand` are **robust**. They do not expand when moved to `.toc`.

```tex linenums="1"
\documentclass{scrartcl}
\begin{document}
% Define commands
\NewDocumentCommand\testA{}{ABC}
\newcommand\testB{ABC}

% Print table of contents
\tableofcontents

% Renew and see if command expands in TOC
\RenewDocumentCommand\testA{}{CDE}
\renewcommand\testB{CDE}

\section{\testA, \testB}
\end{document}
```

!!! Result
    ![Result](figures/diff-macros.png)
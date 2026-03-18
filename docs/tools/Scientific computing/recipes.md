# Recipes

```python linenums="1" title="Plot and find minimum value"
import numpy as np
import matplotlib.pyplot as plt

y_min = np.min(y)
y_argmin = np.argmin(y)

plt.title("title")
plt.xlabel("x")
plt.ylabel("y")
plt.scatter(x, y)
plt.scatter(x[y_argmin], y_min, color="red")
plt.show()

print(f"Minimal {y_min: .2e} found at [{y_argmin}]")
```
# GCP pricing

## Compute engine
### Free offering
- 1 non-preemptible e2-micro VM instance per month in one of the following US regions:
```text linenums="1"
Oregon: us-west1.
Iowa: us-central1.
South Carolina: us-east1.
```
- 30 GB-months standard persistent disk.

### VM
Pricing shown for London (`europe-west2`), in USD, hourly.

| Type             | vCPUs | Memory | Price |
|------------------|-------|--------|-------|
| `e2-micro`       | 0.25  | 1GB    | ?     |
| `c4-standard-16` | 16    | 60 GiB | 0.9   |
| `c4d-standard-2` | 2     | 7 GiB  | 0.1   |

### Disk
Pricing shown for London (`europe-west2`), in USD, monthly.

| Type               | 1 GiB | 16 GiB | 32 GiB | 64 GiB |
|--------------------|-------|--------|--------|--------|
| Hyperdisk Balanced | 0.091 | 1.46   | 2.91   | 5.82   |

!!! info 
    (\(64 + 16 \times 3 \)) GiB Hyperdisk Balanced would cost about $10 monthly.
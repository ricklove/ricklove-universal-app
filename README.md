# rl-common

To install dependencies:

```bash
bun install
```


# Bun Workarounds

- when getting `error: workspace dependency "example-a" not found` 

```bash
rm -f bun.lockb && bun install
```

- bun is not resolving package versions correctly for expo
    - use yarn in the expo app
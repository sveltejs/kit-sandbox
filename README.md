# kit-sandbox

A way for maintainers to test out changes to Kit outside the repo. Place it next to the [kit](https://github.com/sveltejs/kit) repo, `pnpm install`, then link the packages you want to test:

```
pnpm link ../kit/packages/kit
pnpm link ../kit/packages/adapter-auto
# etc
```

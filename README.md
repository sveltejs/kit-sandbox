# kit-sandbox

A way for maintainers to test out changes to Kit outside the repo. Place it next to the [kit](https://github.com/sveltejs/kit) repo, then `pnpm install`. Because of these lines in [package.json](package.json), `pnpm dev`/`build`/`preview`/`package` will use the SvelteKit source, rather than the built CLI/library:

```json
"scripts": {
  "dev": "node ../kit/packages/kit/src/cli.js dev --port 4567",
  "build": "node ../kit/packages/kit/src/cli.js build",
  "package": "node ../kit/packages/kit/src/cli.js package",
  "preview": "node ../kit/packages/kit/src/cli.js preview --port 4567"
},
"pnpm": {
  "overrides": {
    "@sveltejs/kit": "../kit/packages/kit",
    "@sveltejs/adapter-auto": "../kit/packages/adapter-auto"
  }
}
```

It serves on port 4567 so that you can run Kit tests without shutting the app down.

Note that this app has a dependency on `devalue` — this would normally be inlined into the Kit library, but not when we're using the source code, so we need to add it here otherwise the app won't run.

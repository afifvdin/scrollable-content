# Scrollable Content

Vite React app configured for deployment to Cloudflare Workers Static Assets.

## Development

```sh
yarn dev
```

## Build

```sh
yarn build
```

## Preview with Cloudflare Workers

```sh
yarn preview:workers
```

This builds the app and serves the `dist` output through Wrangler using the Workers runtime.

## Deploy

```sh
yarn deploy
```

The Wrangler config serves `./dist` as static assets and uses SPA fallback routing so direct visits to routes like `/vh`, `/lvh`, `/dvh`, and `/svh` return `index.html`.

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

---

## Developer Tips

nuxi コマンド
https://v3.nuxtjs.org/api/commands/add/

```
npx nuxi add [--cwd] [--force] TEMPLATE NAME

component: npx nuxi add component TheHeader
composable: npx nuxi add composable foo
layout: npx nuxi add layout custom
plugin: npx nuxi add plugin analytics
page: npx nuxi add page about or npx nuxi add page "category/[id]"
middleware: npx nuxi add middleware auth
api: npx nuxi add api hello (CLI will generate file under /server/api)
```
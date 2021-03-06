# Svelte (TS) + Vite + Tailwind

This template should help get you started developing with Svelte (TypeScript) and Tailwind in Vite.

This template is based on official [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-svelte-ts) template for Svelte TS with use of [svelte-add](https://github.com/svelte-add/tailwindcss) for adding Tailwind with ease.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/)

> All necessary plugins are defined in the `.vscode/extensions.json` file. So the IDE will recommend them to you automatically

## Project setup

> If you want more out of a pure Svelte + Vite + Tailwind experience, go to the [enhanced](https://github.com/SecondThundeR/svelte-vite-tailwind/tree/enhanced) branch

To use this template, you can use npx digit on this branch or setup everything manually.

### Quickstart

```shell
npx degit secondthunder/svelte-vite-tailwind name-of-svelte-app
cd name-of-svelte-app
npm install
```

### Manual setup

```shell
npm init vite@latest name-of-svelte-app -- --template svelte-ts
cd name-of-svelte-app
npm install
...
npx svelte-add@latest tailwindcss
npm install
```

If you prefer regular JS, you can run first command above with `--template svelte`

## License

This repository is licensed under [MIT License](https://github.com/SecondThundeR/svelte-vite-tailwind/blob/main/LICENSE)

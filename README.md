# Overance Recruitment Task

## Important notes

This task is based on several key assumptions:

- Importing additional libraries is restricted, unless explicitly permitted in the task description, to maintain minimal dependencies. However, `devDependencies` may be expanded to include tools for linting and formatting preferences.
- The application must meet accessibility requirements and aim for a maximum Lighthouse score.
- The use of Pinia is limited to the implementation of the _input factory_ for demonstration purposes, as its broader application is unnecessary in this context.
- Styling is not a requirement but must not compromise accessibility.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Svelte - Markdown starter

- tailwind
- svelte (full ssg)
- markdown (marked for markdown conversion)
- cm6 ssg for code snippets (hard coded for now)
- prettier for formatting the code snippets before they get syntax highlighted by cm6
Based on https://zhifez-lee.medium.com/sveltekit-setting-up-a-markdown-based-blog-9b3fe266bf76


I'm using pnpm for package management (FAST).

Deploy to CodeSandbox. 

## Getting started
1. Clone
2. pnpm install
3. npm run dev
4. open `/test` which will load the test.md markdown folder formatted from the static/posts folder. 

Logic & template is in `routes/[slug]`.




# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

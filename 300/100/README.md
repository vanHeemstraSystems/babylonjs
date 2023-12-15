# 100 - Create a new BabylonJS application

From the directory ```containers/app/```, run the following command:

```
$ npm create vite@latest
```

When prompted:

```
Need to install the following packages:
create-vite@5.1.0
Ok to proceed? (y) 
```

Hit ENTER to agree to the default (y).

When prompted:

```
? Project name: > vite-project
```

Overwrite the default (i.e. vite-project) with **babylonjs**.

When prompted for the framework:

```
? Select a framework: > - Use arrow-keys. return to submit.
>   Vanilla
    Vue
    React
    Preact
    Lit
    Svelte
    Solid
    Qwik
   Others
```

Navigate with your arrow-keys to **Svelte** and hit ENTER.

When prompted for the variant:

```
? Select a variant: > Use arrow-keys. Return to submit.
>   TypeScript
    JavaScript
    SvelteKit
```

Navigate with your arrowkeys to **SvelteKit** and hit ENTER.

When prompted:

```
Need to install the following packages:
create-svelte@6.0.0
Ok to proceed? (y)
```

Hit ENTER.

After the required modules have been installed, you will be prompted again:

```
create-svelte version 6.0.0

Welcome to SvelteKit!

Which Svelte app template?
  - SvelteKit demo app (A demo app showcasing some of the features of SvelteKit - play a word guessing game that works without JavaScript!)
  - Skeleton project (Barebones scaffolding for your new SvelteKit app)
  - Library project (Barebones scaffolding for your new Svelte library)
```

Navigate with your arrow-keys to **Skeleton project** and hit ENTER.

You will be prompted as follows:

```
Add type checking with TypeScript?
  - Yes, using JavaScript with JSDoc comments
  - Yes, using TypeScript syntax
  - No
```

Navigate with your arrow-keys to **Yes, using TypeScript syntax** and hit ENTER.

The next prompt reads:

```
Select additional options (use arrow keys/space bar)
[] Add ESLint for code linting
[] Add Prettier for code formatting
[] Add Playwright for browser testing
[] Add Vitest for unit testing
[] Try the Svelte 5 preview (unstable)
```

Navigate to the following and check their boxes by using the space bar, then hit ENTER:

[x] Add ESLint for code linting
[x] Add prettier for code formatting

The final prompt is:

```
└  Your project is ready!

✔ Typescript
  Inside Svelte components, use <script lang="ts">

✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte

✔ Prettier
  https://prettier.io/docs/en/options.html
  https://github.com/sveltejs/prettier-plugin-svelte#options

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: cd babylonjs
  2: npm install
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
npm notice 
npm notice New minor version of npm available! 10.1.0 -> 10.2.5
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.2.5
npm notice Run npm install -g npm@10.2.5 to update!
npm notice 
```

Run the following commands as advised:

```
$ cd babylonjs
$ npm install -g npm@10.2.5
$ npm install
```

Commit your first changes to Git.

Start the server as follows:

```
$ npm run dev -- --open
```

It prompts:

```

> babylonjs@0.0.1 dev
> vite dev --open


Forced re-optimization of dependencies

  VITE v5.0.9  ready in 948 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

A new browser window will be opened showing the welcome page of SvelteKit:

```
Welcome to SvelteKit
Visit kit.svelte.dev to read the documentation
```

Stop the server by entering CTRL + C.

Then install Babylon.js as follows:

```
$ npm install -D @babylonjs/core
```
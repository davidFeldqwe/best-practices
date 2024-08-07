# Best Practices   

This is an example of a best practices project

## Installation & Setup

Make sure you have PNPM installed:

```bash
$ npm i -g pnpm
```

In the root of the project, run:

```bash
$ pnpm install
```

You'll also want to install `turbo` globally. You can do this via:

```bash
$ pnpm install -g turbo
```

## Running

To run the server or any of the clients, you can use the `dev` command in their `package.json`. You can do this by running

```bash
$ pnpm dev
```

inside the directory, or by running

```bash
$ pnpm --dir target dev
```

from the root, where `target` is the directory of the server/client you're trying to run.

You can also run all the clients and server at once with:

```bash
$ turbo run dev
```
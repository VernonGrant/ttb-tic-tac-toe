# Tic Tac Toe

[![Test and Deploy](https://github.com/VernonGrant/ttb-tic-tac-toe/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/VernonGrant/ttb-tic-tac-toe/actions/workflows/deploy.yml)

The following tic tac toe game was done as a technical interview. It makes use of ES6 modules, supported by most modern web browsers. It includes unit and end to end tests, it also uses GitHub workflows to deploy passing builds to GitHub Pages. [**View Demo**](https://vernongrant.github.io/ttb-tic-tac-toe/)

![Tic Tac Toe](https://github.com/VernonGrant/ttb-tic-tac-toe/blob/main/img/screenshot.jpg "Demonstration Image")

---

## Prerequisites

The following tools should be installed and available on your system's `PATH`.

- [NVM](https://github.com/nvm-sh/nvm): To manage `Node.js` versions.
- [PNPM](https://pnpm.io/): To manage dependencies.

## Local Setup

Clone this repository and change your active directory into the cloned repository's root folder:

```sh
git clone https://github.com/VernonGrant/ttb-tic-tac-toe && cd ./ttb-tic-tac-toe
```

Before continuing, we need to make sure we have the correct version of `Node.js` active. We can run the following command to install and activate the node version required by our project.

```sh
nvm use
```

Next we need to install the projects dependencies using `PNPM`.

```sh
pnpm install
```

We can now run the application using `vite` live server, using the following command:

```sh
pnpm run serve
```

Please note that port `5173` should be available. If you have any other local vite instances running on the same port, please terminate them before running the above command.

## Running Tests

Tests are separated into two categories, **unit tests** and **end to end tests**. To run the unit tests you can use the following command:

```sh
pnpm run test-unit
```

And to run the end to end tests you can use:

```sh
pnpm run test-e2e
```

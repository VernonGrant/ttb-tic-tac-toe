# Tic Tac Toe

[![Test and Deploy](https://github.com/VernonGrant/ttb-tic-tac-toe/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/VernonGrant/ttb-tic-tac-toe/actions/workflows/deploy.yml)

The following project was done for a technical interview. It makes use of modern browsers supported ES6 modules to construct a tic tac toe game. It includes unit and end to end tests and makes use of GitHub workflows for deployment to GitHub pages. [**View Demo**](https://vernongrant.github.io/ttb-tic-tac-toe/)

![Tic Tac Toe](https://github.com/VernonGrant/ttb-tic-tac-toe/blob/main/img/screenshot.jpg "Demonstration Image")

---

## Prerequisites

The following tools should be installed and available on your systems path.

- [NVM](https://github.com/nvm-sh/nvm): To manage `Node.js` versions.
- [PNPM](https://pnpm.io/): To manage dependencies.
- [Node.js v16](https://nodejs.org/en): Use `NVM` to install and activate version 16 of `Node.js`.

## Local Setup

Clone this repository and change your active directory into the cloned repository:

```sh
git clone https://github.com/VernonGrant/ttb-tic-tac-toe && cd ./ttb-tic-tac-toe
```

Before installing any dependencies or running commands, we need to make sure we have the correct version of `Node.js` active. We can run the following command to install and activate the node version we need.

```sh
nvm use
```

Install the projects dependencies using `PNPM`. Make sure your inside the cloned repositories root folder.

```sh
pnpm install
```

Run the application using `vite` using the following command. Please note that it will require port `5173` to be open. So if you have any other local vite instances running on the same port, please close them.

```sh
pnpm run serve
```

## Running Tests

Tests are separated into two categories, **unit tests** and **end to end tests**. To run the unit tests you can use the following command.

```sh
pnpm run test-unit
```

And to run the end to end tests you can use:

```sh
pnpm run test-e2e
```

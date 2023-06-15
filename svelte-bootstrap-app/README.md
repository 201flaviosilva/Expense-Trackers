# Svelte Bootstrap Expense Tracker App

## Main Stack

- ![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Description

This is the Svelte and Bootstrap implementation of the Expense Tracker

## MVP

- [X] List all transactions
- [X] Show a basic dashboard balance:
  - Total (Incomes+Expenses);
  - Total Incomes;
  - Total Expenses;
- [X] Add an individual transaction (name, amount, date);
- [X] Search bar to filter the transaction with the current input;
- [X] Save/load state to/from localstorage;
- [X] Individually remove;
- [X] Clear all items (with a confirmation modal);

## Make it run

### Clone and change directory

Clone the project and move it into the `svelte-app` folder:

```sh
git clone https://github.com/201flaviosilva/Expense-Trackers.git
cd Expense-Trackers/svelte-app
```

### Install the dependencies

To install the node dependencies, you need to have [node and npm](https://nodejs.org) installed in you machine.

```sh
npm i
```

### Start the app

To make the app running and open a browser window just run:

```sh
npm start
```

## Available Commands

| Command         | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `npm run clear` | Delete the `build` and `out` and `dist` folder                                  |
| `npm i`         | Install project dependencies                                                    |
| `npm start`     | Start project and open web server running project                               |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |


## Relevant Technologies

- [Vite](https://vitejs.dev/);
- [Svelte](https://svelte.dev/);
- [Svelte Icons Pack](https://leshak.github.io/svelte-icons-pack);
- [Moment](https://momentjs.com/);
- [Bootstrap](https://getbootstrap.com/)/[sveltestrap](https://sveltestrap.js.org/);

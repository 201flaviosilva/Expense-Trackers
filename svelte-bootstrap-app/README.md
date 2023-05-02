# Svelte Bootstrap Expense Tracker App

## Description

This is the Svelte and Bootstrap implementation of the Expense Tracker

## MVP

- [ ] Add an individual transaction (name, amount, date);
- [ ] Search bar to filter the transaction with the current input;
- [ ] Save/load state to/from localstorage;
- [ ] Individually remove;
- [ ] Clear all items (with a confirmation modal);


## Make it run

### Clone and change directory

Clone the project and move it into the `svelte-app` folder:

```sh
git clone https://github.com/201flaviosilva-labs/Expense-Trackers.git
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
- [Svelte Icons](https://svelte-icons.vercel.app/);
- [Moment](https://momentjs.com/);
- [Bootstrap](https://getbootstrap.com/)/[sveltestrap](https://sveltestrap.js.org/);

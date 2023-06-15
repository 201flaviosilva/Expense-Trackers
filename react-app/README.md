# React Expense Tracker App

## Main Stack

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Description

This is the React with CSS/SCSS modules implementation of the Expense Tracker
## MVP

- [x] Add an individual transaction (name, amount, date)
- [x] Search bar to filter the transaction with the current input;
- [x] Save/load state to/from localstorage;
- [x] Individually:
  - [x] Remove
  - [x] Edit:
    - [x] Name;
    - [x] Amount;
    - [x] Date;
- [x] Clear all items (with a confirmation modal);


## Make it run

### Clone and change directory

Clone the project and move it into the `react-app` folder:

```sh
git clone https://github.com/201flaviosilva/Expense-Trackers.git
cd Expense-Trackers/react-app
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

- [Create React App](https://create-react-app.dev/);
- [React/React Dom](https://react.dev/);
- [React Icons](https://react-icons.github.io/react-icons/);
- [Moment](https://momentjs.com/);
- [SCSS](https://sass-lang.com/)/[CSS Modules](https://github.com/css-modules/css-modules);

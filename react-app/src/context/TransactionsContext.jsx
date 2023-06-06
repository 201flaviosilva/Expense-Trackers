/**
 * @typedef Transaction
 * @type {object}
 * @property {number} id - The transaction identifier.
 * @property {string} title - The transaction title.
 * @property {boolean} amount - 
 * @property {Date} date - 
 */

import { createContext, useState, useEffect } from "react";

export const LOCAL_NAME_SPACE = "React-App-Expense-Tracker";
export const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
	const localTransactions = JSON.parse(localStorage.getItem(LOCAL_NAME_SPACE)) || []; // Load from the local storage
	const [transactions, setTransactions] = useState(localTransactions);
	const [searchTransaction, setSearchTransaction] = useState("");

	// Update local storage
	useEffect(() => {
		localStorage.setItem(LOCAL_NAME_SPACE, JSON.stringify(transactions));
	}, [transactions]);

	return (
		<TransactionsContext.Provider value={{ transactions, setTransactions, searchTransaction, setSearchTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
};

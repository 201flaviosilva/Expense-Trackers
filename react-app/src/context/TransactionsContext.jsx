/**
 * @typedef Transaction
 * @type {object}
 * @property {number} id - The transaction identifier.
 * @property {string} title - The transaction title.
 * @property {number} amount - The amount expend/earn.
 * @property {Date} date - Date of the transaction.
 */

import { createContext, useEffect, useReducer, useState } from "react";
import { LOCAL_NAME_SPACE, initialStateTransactions, reducer } from "./TransactionsReduce";

export const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialStateTransactions);
	const [searchTransaction, setSearchTransaction] = useState("");

	// Update local storage
	useEffect(() => {
		localStorage.setItem(LOCAL_NAME_SPACE, JSON.stringify(state));
	}, [state]);

	return (
		<TransactionsContext.Provider value={{ state, dispatch, searchTransaction, setSearchTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
};

import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export function useTransactionContext() {
	const context = useContext(TransactionsContext);

	if (!context) console.error("Error - No Transaction Context Found");

	return context;
};

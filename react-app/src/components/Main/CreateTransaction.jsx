import { useState } from "react";
import { actionTypes } from "../../context/TransactionsReduce";
import { useTransactionContext } from "../../hooks/useTransactionContext";
import { getTodayFormatted } from "../../utils";
import Input from "../Input";
import styles from "./style.module.scss";

export default function CreateTransaction() {
	const { dispatch } = useTransactionContext();
	const [newTransactionTitle, setNewTransactionTitle] = useState("");
	const [newTransactionAmount, setNewTransactionAmount] = useState(0);
	const [newTransactionDate, setNewTransactionDate] = useState(getTodayFormatted());

	function onSubmit(e) {
		e.preventDefault();

		dispatch({
			type: actionTypes.ADD,
			title: newTransactionTitle,
			amount: newTransactionAmount,
			date: newTransactionDate,
		});

		setNewTransactionTitle("");
		setNewTransactionAmount(0);
		setNewTransactionDate(getTodayFormatted());
	}

	return (
		<form onSubmit={onSubmit} className={styles.createTransaction}>
			<h2>New Transaction</h2>

			<div className={styles.inputsContainer}>
				<Input
					placeholder="Title"
					title="Transaction Title"
					value={newTransactionTitle}
					setValue={setNewTransactionTitle}
					labelStyle={styles.labelStyle}
					maxLength={60}
				/>

				<div>
					<Input
						type="number"
						placeholder="Value"
						title="Transaction Value"
						value={newTransactionAmount}
						setValue={setNewTransactionAmount}
						labelStyle={styles.labelStyle}
					/>
					<Input
						type="date"
						placeholder="Date"
						title="Transaction Date"
						value={newTransactionDate}
						setValue={setNewTransactionDate}
						labelStyle={styles.labelStyle}
					/>
				</div>
			</div>

			<button type="submit">Create</button>
		</form>
	)
}

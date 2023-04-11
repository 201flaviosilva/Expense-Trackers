import moment from "moment";
import { useState } from "react";
import Input from "../Input";
import styles from "./style.module.scss";

export default function CreateTransaction({ onCreateNewTransaction }) {
	const [newTransactionTitle, setNewTransactionTitle] = useState("");
	const [newTransactionAmount, setNewTransactionAmount] = useState(0);
	const [newTransactionDate, setNewTransactionDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

	function onSubmit(e) {
		e.preventDefault();

		const newTransaction = {
			id: Math.random(),
			title: newTransactionTitle,
			amount: newTransactionAmount,
			date: newTransactionDate,
		};

		onCreateNewTransaction(newTransaction);

		setNewTransactionTitle("");
		setNewTransactionAmount(0);
		setNewTransactionDate(moment(new Date()).format("YYYY-MM-DD"));
	}

	return (
		<form onSubmit={onSubmit} className={styles.createTransaction}>
			<h2>New Transaction</h2>

			<div className={styles.inputs}>
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

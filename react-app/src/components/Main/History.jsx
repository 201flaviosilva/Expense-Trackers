import { useEffect, useState } from "react";
import { GiNuclearBomb } from "react-icons/gi";
import { GoAlert } from "react-icons/go";
import ConfirmationDialog from "../ConfirmationDialog";
import Transaction from "../Transaction";
import styles from "./style.module.scss";

export default function History({ searchTransaction, transactions, setTransactions }) {
	const [filteredTransactions, setFilteredTransactions] = useState([]);
	const [isConfirmOpen, setIsConfirmOpen] = useState(false);

	// Filter transactions
	useEffect(() => {
		const filterByName = searchTransaction ? transactions.filter(({ value }) => value.toUpperCase().includes(searchTransaction.toUpperCase())) : transactions;

		setFilteredTransactions(filterByName);
	}, [searchTransaction, transactions]);

	function editTransaction(id, newName) {
		setTransactions(transactions.map(t => {
			if (t.id === id) return { ...t, value: newName };
			return t;
		}));
	}

	function removeTransaction(id) {
		setTransactions(transactions.filter(t => t.id !== id));
	}

	return (
		<>
			<div className={styles.history}>
				<h2>History</h2>
				<ul>
					{filteredTransactions.map((t) => <Transaction
						key={t.id}
						{...t}
						editTransaction={editTransaction}
						removeTransaction={removeTransaction}
					/>)}

				</ul>

				{
					transactions.length > 0 &&
					<button
						className={styles.clearBTN}
						onClick={() => setIsConfirmOpen(true)}>
						<GiNuclearBomb size={24} />
					</button>
				}
			</div>

			{
				isConfirmOpen && <ConfirmationDialog
					title="Delete All Transactions"
					message={`Are you sure you want to remove all ${transactions.length} transactions?`}
					Icon={GoAlert}
					onConfirm={() => {
						setTransactions([]);
						setIsConfirmOpen(false);
					}}
					onCancel={() => setIsConfirmOpen(false)}
				/>
			}
		</>
	)
}

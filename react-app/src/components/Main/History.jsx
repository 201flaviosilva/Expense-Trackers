import { useEffect, useState } from "react";
import { GiNuclearBomb } from "react-icons/gi";
import { GoAlert } from "react-icons/go";
import { actionTypes } from "../../context/TransactionsReduce";
import { useTransactionContext } from "../../hooks/useTransactionContext";
import ConfirmationDialog from "../ConfirmationDialog";
import Transaction from "../Transaction";
import styles from "./style.module.scss";

export default function History() {
	const { searchTransaction, state, dispatch } = useTransactionContext();

	const [filteredTransactions, setFilteredTransactions] = useState([]);
	const [isConfirmOpen, setIsConfirmOpen] = useState(false);

	// Filter transactions
	useEffect(() => {
		const filterByName = searchTransaction ? state.filter(({ title }) => title.toUpperCase().includes(searchTransaction.toUpperCase())) : state;

		setFilteredTransactions(filterByName);
	}, [searchTransaction, state]);

	return (
		<>
			<div className={styles.history}>
				<h2>History</h2>
				<ul>
					{filteredTransactions.map((t) => <Transaction key={t.id} {...t} />)}
				</ul>

				<button
					className={styles.clearBTN}
					onClick={() => setIsConfirmOpen(true)}>
					<GiNuclearBomb size={24} />
				</button>
			</div>

			{
				isConfirmOpen && <ConfirmationDialog
					title="Delete All Transactions"
					message={`Are you sure you want to remove all ${state.length} transactions?`}
					Icon={GoAlert}
					onConfirm={() => {
						dispatch({ type: actionTypes.RESET });
						setIsConfirmOpen(false);
					}}
					onCancel={() => setIsConfirmOpen(false)}
				/>
			}
		</>
	)
}

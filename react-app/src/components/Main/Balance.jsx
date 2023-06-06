import { useTransactionContext } from "../../hooks/useTransactionContext";
import styles from "./style.module.scss";

export default function Balance() {
	const { transactions } = useTransactionContext();

	const income = transactions.reduce((acc, cur) => cur.amount > 0 ? acc + Number(cur.amount) : acc, 0);
	const expense = transactions.reduce((acc, cur) => cur.amount < 0 ? acc + Number(cur.amount) : acc, 0);

	return (
		<div className={styles.balance}>
			<h2>Balance</h2>

			<div className={styles.table}>
				<Column label="Income" value={income} />
				<Column label="Total" value={income + expense} />
				<Column label="Expense" value={expense} />
			</div>
		</div>
	);
}

function Column({ label, value }) {
	const balanceColor = (value > 0 && styles.positiveBalance) || (value < 0 && styles.negativeBalance) || "";

	return (
		<div>
			<p className={`${styles.title} ${balanceColor}`}>{label}</p>
			<p className={balanceColor}>{value}€</p>
		</div>
	);
}

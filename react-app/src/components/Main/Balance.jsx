import styles from "./style.module.scss";

export default function Balance({ transactions }) {
	const income = transactions.reduce((acc, cur) => cur.amount > 0 ? acc + Number(cur.amount) : acc, 0);
	const expense = transactions.reduce((acc, cur) => cur.amount < 0 ? acc + Number(cur.amount) : acc, 0);

	return (
		<div className={styles.balance}>
			<h2>Balance</h2>

			<div>
				<Column label="Income" value={income} />
				<Column label="Total" value={income + expense} />
				<Column label="Expense" value={expense} />
			</div>
		</div>
	)
}

function Column({ label, value }) {
	return (
		<div>
			<p>{label}</p>
			<p>{value}€</p>
		</div>
	)

}

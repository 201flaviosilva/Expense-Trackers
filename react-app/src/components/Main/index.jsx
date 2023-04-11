import Balance from "./Balance";
import CreateTransaction from "./CreateTransaction";
import History from "./History";
import styles from "./style.module.scss";

export default function Main({ searchTransaction, transactions, setTransactions }) {
	function onCreateNewTransaction(newTransaction) {
		setTransactions(prev => [...prev, newTransaction]);
	}

	return (
		<main className={styles.main}>
			<Balance transactions={transactions} />
			<CreateTransaction onCreateNewTransaction={onCreateNewTransaction} />
			{transactions.length > 0 &&
				<History searchTransaction={searchTransaction} transactions={transactions} setTransactions={setTransactions} />
			}
		</main>
	)
}

import { useTransactionContext } from "../../hooks/useTransactionContext";
import Balance from "./Balance";
import CreateTransaction from "./CreateTransaction";
import History from "./History";
import styles from "./style.module.scss";

export default function Main() {
	const { transactions, setTransactions } = useTransactionContext();

	function onCreateNewTransaction(newTransaction) {
		setTransactions(prev => [...prev, newTransaction]);
	}

	return (
		<main className={styles.main}>
			<Balance />
			<CreateTransaction onCreateNewTransaction={onCreateNewTransaction} />
			{transactions.length > 0 && <History />}
		</main>
	)
}

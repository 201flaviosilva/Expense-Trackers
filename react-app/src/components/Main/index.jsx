import { useTransactionContext } from "../../hooks/useTransactionContext";
import Balance from "./Balance";
import CreateTransaction from "./CreateTransaction";
import History from "./History";
import styles from "./style.module.scss";

export default function Main() {
	const { state } = useTransactionContext();

	return (
		<main className={styles.main}>
			<Balance />
			<CreateTransaction />
			{state.length > 0 && <History />}
		</main>
	)
}

import Input from "../Input";
import styles from "./style.module.scss";

export default function Header({ searchTask, setSearchTask }) {
	return (
		<header className={styles.header}>
			<h1>To Do List</h1>
			<Input
				placeholder="Search for a task"
				value={searchTask}
				setValue={setSearchTask}
			/>
			<h1>React App</h1>
		</header>
	)
}

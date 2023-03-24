import { useState } from "react";
import { GiNuclearBomb } from "react-icons/gi";
import Input from "../Input";
import Task from "../Task";
import styles from "./style.module.scss";

export default function Main({ filteredTasks, setTasks }) {
	const [newTask, setNewTask] = useState("");

	function onSubmit(e) {
		e.preventDefault();
		setTasks(prev => [...prev, { id: Math.random(), value: newTask }]);
		setNewTask("");
	}

	return (
		<main className={styles.main}>
			<form onSubmit={onSubmit}>
				<Input
					placeholder="New task"
					value={newTask}
					setValue={setNewTask}
					labelStyle={styles.labelStyle}
				/>
			</form>

			<ul>
				{filteredTasks.map(({ id, value }) => <Task
					key={id}
					value={value}
				/>)}

				{filteredTasks.length > 0 &&
					<button onClick={() => setTasks([])}>
						<GiNuclearBomb />
					</button>
				}
			</ul>
		</main>
	)
}

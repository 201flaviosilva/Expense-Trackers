import { useState } from "react";
import { GiNuclearBomb } from "react-icons/gi";
import Input from "../Input";
import Task from "../Task";
import styles from "./style.module.scss";

export default function Main({ filteredTasks, tasks, setTasks }) {
	const [newTask, setNewTask] = useState("");

	function onSubmit(e) {
		e.preventDefault();
		setTasks(prev => [...prev, { id: Math.random(), value: newTask }]);
		setNewTask("");
	}

	function editTask(id, newName) {
		setTasks(tasks.map(t => {
			if (t.id === id) return { ...t, value: newName };
			return t;
		}));
	}

	function toggleCompletedTask(id) {
		setTasks(tasks.map(t => {
			if (t.id === id) return { ...t, isCompleted: !t.isCompleted };
			return t;
		}));
	}

	function removeTask(id) {
		setTasks(tasks.filter(t => t.id !== id));
	}

	return (
		<main className={styles.main}>
			<form onSubmit={onSubmit}>
				<Input
					placeholder="New task"
					value={newTask}
					setValue={setNewTask}
					labelStyle={styles.labelStyle}
					maxLength={60}
				/>
			</form>

			<div className={styles.list}>
				<ul>
					{filteredTasks.map((t) => <Task
						key={t.id}
						{...t}
						editTask={editTask}
						toggleCompletedTask={toggleCompletedTask}
						removeTask={removeTask}
					/>)}

				</ul>

				{filteredTasks.length > 0 &&
					<button onClick={() => setTasks([])}>
						<GiNuclearBomb size={24} />
					</button>
				}
			</div>
		</main>
	)
}

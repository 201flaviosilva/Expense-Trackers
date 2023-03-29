import styles from "./style.module.scss";

export default function CompletedTasksFilter({ selectedCompleted, setSelectedCompleted }) {
	function onClick(value) {
		setSelectedCompleted(value);
	}

	return (
		<aside>
			<RadioInput
				value="All"
				selectedCompleted={selectedCompleted}
				onClick={onClick}
			/>

			<RadioInput
				value="Completed"
				selectedCompleted={selectedCompleted}
				onClick={onClick}
			/>

			<RadioInput
				value="Uncompleted"
				selectedCompleted={selectedCompleted}
				onClick={onClick}
			/>
		</aside>
	)
}

function RadioInput({ value, selectedCompleted, onClick }) {
	return (
		<button
			className={`${selectedCompleted === value && styles.active}`}
			onClick={() => onClick(value)}
		>
			{value}
		</button>
	)
}

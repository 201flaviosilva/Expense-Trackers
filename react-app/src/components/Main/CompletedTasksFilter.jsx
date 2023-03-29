import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import styles from "./style.module.scss";

const ICON_SIZE = 16;

export default function CompletedTasksFilter({ selectedCompleted, setSelectedCompleted }) {
	const [isOpen, setIsOpen] = useState(false);
	function onClick(value) {
		setSelectedCompleted(value);
	}

	return (
		<aside>
			<button
				title="Filter by un/completed tasks"
				className={styles.toggleBTN}
				onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <GoChevronDown size={ICON_SIZE} /> : <GoChevronUp size={ICON_SIZE} />}
			</button>

			{isOpen && <div className={styles.container}>
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
			</div>}
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

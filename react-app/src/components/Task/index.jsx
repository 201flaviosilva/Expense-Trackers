import { useCallback, useState } from "react";
import { GoAlert, GoCheck, GoPencil, GoTrashcan } from "react-icons/go";
import styles from "./style.module.scss";

const ICON_SIZE = 16;

export default function Task({ id, value, isCompleted, editTask, toggleCompletedTask, removeTask }) {
	const [isHouver, setIsHouver] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState("");

	const onEditTackClick = useCallback(() => {
		if (!isEditing) return setIsEditing(true);

		newTitle && editTask(id, newTitle);
		setIsEditing(false);
	}, [editTask, id, isEditing, newTitle])

	return (
		<li
			className={`${styles.task}`}
			title={`Completed: ${isCompleted}`}
		>
			{/* Show/Edit title */}
			{!isEditing && <span className={isCompleted ? styles.completed : ""}>{value}</span>}
			{isEditing && <input
				title="Leave empty to cancel"
				placeholder={value}
				value={newTitle}
				onChange={(e) => setNewTitle(e.target.value)}
			/>}

			{/* Action button -> Edit, mark as completed and delete */}
			<div className={styles.actions}>
				<button
					onClick={onEditTackClick}
					title={isEditing ? "Confirm" : "Change the title"}
				><EditIcon isEditing={isEditing} /></button>

				{!isEditing && <>
					<button
						onClick={() => toggleCompletedTask(id)}
						title={`Mark task as ${!isCompleted ? "completed" : "uncompleted"}`}
					><GoCheck size={ICON_SIZE} /></button>
					<button
						className={styles.danger}
						onClick={() => removeTask(id)}
						onMouseEnter={() => setIsHouver(true)}
						onMouseLeave={() => setIsHouver(false)}
						title="Delete task"
					><DeleteIcon isHouver={isHouver} /></button>
				</>}
			</div>
		</li>
	)
}

function EditIcon({ isEditing }) {
	return isEditing ? <GoCheck size={ICON_SIZE} /> : <GoPencil size={ICON_SIZE} />;
}

function DeleteIcon({ isHouver }) {
	return isHouver ? <GoAlert size={ICON_SIZE} /> : <GoTrashcan size={ICON_SIZE} />;
}

import { useCallback, useState } from "react";
import { GoAlert, GoArchive, GoCheck, GoPencil, GoTrashcan } from "react-icons/go";
import { ICON_SIZE } from "../../CONSTANTS";
import styles from "./style.module.scss";

export default function Task({ id, value, isCompleted, isArchived, editTask, toggleCompletedTask, toggleArchivedTask, removeTask }) {
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
			className={`${styles.task} ${isArchived && styles.archived}`}
			title={`Archived: ${isArchived}\nCompleted: ${isCompleted}`}
		>
			{/* Show/Edit title */}
			{!isEditing && <span className={isCompleted && styles.completed}>{value}</span>}
			{isEditing && <input
				placeholder={value}
				value={newTitle}
				onChange={(e) => setNewTitle(e.target.value)}
			/>}

			{/* Action button -> Edit, mark as completed, archived and delete */}
			<div className={styles.actions}>
				<button
					onClick={onEditTackClick}
					title="Change the title"
				><EditIcon isEditing={isEditing} /></button>

				{!isEditing && <>
					<button
						onClick={() => toggleCompletedTask(id)}
						title={`Mark task as ${!isCompleted ? "completed" : "uncompleted"}`}
					><GoCheck size={ICON_SIZE} /></button>
					<button
						onClick={() => toggleArchivedTask(id)}
						title={`Mark task as ${!isArchived ? "archived" : "unarchived"}`}
					><GoArchive size={ICON_SIZE} /></button>
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

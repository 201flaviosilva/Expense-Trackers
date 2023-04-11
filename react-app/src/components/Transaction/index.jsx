import moment from "moment";
import { useCallback, useState } from "react";
import { GoAlert, GoCheck, GoPencil, GoTrashcan } from "react-icons/go";
import styles from "./style.module.scss";

const ICON_SIZE = 16;
const DATE_FORMAT = "DD-MM-yyyy";

export default function Transaction({ id, title, amount, date, editTransaction, removeTransaction }) {
	const [isHouver, setIsHouver] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState("");

	const onEditTackClick = useCallback(() => {
		if (!isEditing) return setIsEditing(true);

		newTitle && editTransaction(id, newTitle);
		setIsEditing(false);
	}, [editTransaction, id, isEditing, newTitle])

	return (
		<li
			className={`${styles.transaction}`}
			title={`Title: ${title}\n Amount: ${amount}\n Date: ${moment(date).format(DATE_FORMAT)}`}
		>
			{/* Show/Edit title */}
			{!isEditing && <>
				<span>{title}</span>
				<span>{amount}</span>
				<span>{moment(date).format(DATE_FORMAT)}</span>
			</>}
			{isEditing && <>
				<input
					title="Leave empty to cancel"
					placeholder={title}
					value={title}
					onChange={(e) => setNewTitle(e.target.value)}
				/>
			</>}

			{/* Action button -> Edit, mark as completed and delete */}
			<div className={styles.actions}>
				<button
					onClick={onEditTackClick}
					title={isEditing ? "Confirm" : "Change the title"}
				><EditIcon isEditing={isEditing} /></button>

				{!isEditing && <>
					<button
						className={styles.danger}
						onClick={() => removeTransaction(id)}
						onMouseEnter={() => setIsHouver(true)}
						onMouseLeave={() => setIsHouver(false)}
						title="Delete transaction"
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

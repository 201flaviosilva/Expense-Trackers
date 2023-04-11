import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { GoAlert, GoCheck, GoPencil, GoTrashcan } from "react-icons/go";
import styles from "./style.module.scss";

const ICON_SIZE = 16;
const DATE_FORMAT = "DD-MM-yyyy";

export default function Transaction({ id, title, amount, date, editTransaction, removeTransaction }) {
	const [isHouver, setIsHouver] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [updatedTrans, setUpdatedTrans] = useState({ title, amount, date: moment(date).format("yyyy-MM-DD") });

	const balanceColor = (amount > 0 && styles.positiveBalance) || (amount < 0 && styles.negativeBalance) || "";

	const onEditTackClick = useCallback(() => {
		if (!isEditing) return setIsEditing(true);

		editTransaction({ id, ...updatedTrans });
		setIsEditing(false);
	}, [editTransaction, id, isEditing, updatedTrans]);

	useEffect(() => {
		setUpdatedTrans({ title, amount, date: moment(date).format("yyyy-MM-DD") });
	}, [title, amount, date,]);

	return (
		<li
			className={`${styles.transaction} ${balanceColor}`}
			title={`Title: ${title}\n Amount: ${amount}\n Date: ${moment(date).format(DATE_FORMAT)}`}
		>
			{/* Show/Edit title */}
			{!isEditing && <>
				<span>{title}</span>
				<span>{amount}</span>
				<span>{moment(date).format(DATE_FORMAT)}</span>
			</>}
			{isEditing && <EditTransaction
				title={title}
				amount={amount}
				date={moment(date).format(DATE_FORMAT)}
				updatedTrans={updatedTrans}
				setUpdatedTrans={setUpdatedTrans}
			/>}

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

function EditTransaction({
	title, amount, date,
	updatedTrans, setUpdatedTrans
}) {
	return (
		<>
			<input
				title="Leave empty to cancel"
				placeholder={title}
				value={updatedTrans.title}
				onChange={(e) => setUpdatedTrans(prev => ({ ...prev, title: e.target.value }))}
			/>
			<input
				type="number"
				title="Leave empty to cancel"
				placeholder={amount}
				value={updatedTrans.amount}
				onChange={(e) => setUpdatedTrans(prev => ({ ...prev, amount: e.target.value }))}
			/>
			<input
				type="date"
				title="Leave empty to cancel"
				placeholder={date}
				value={updatedTrans.date}
				onChange={(e) => setUpdatedTrans(prev => ({ ...prev, date: e.target.value }))}
			/>
		</>
	)
}

function EditIcon({ isEditing }) {
	return isEditing ? <GoCheck size={ICON_SIZE} /> : <GoPencil size={ICON_SIZE} />;
}

function DeleteIcon({ isHouver }) {
	return isHouver ? <GoAlert size={ICON_SIZE} /> : <GoTrashcan size={ICON_SIZE} />;
}

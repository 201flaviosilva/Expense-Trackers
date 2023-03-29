import ReactDOM from "react-dom";
import styles from "./style.module.scss";

export default function ConfirmationDialog({ title, Icon, message, onConfirm = () => { }, onCancel = () => { } }) {
	return ReactDOM.createPortal(
		<div className={styles.wrapper}>
			<div className={styles.container}>
				{Icon && <Icon size={64} />}
				{title && <h1>{title}</h1>}
				<p>{message}</p>

				<div className={styles.actions}>
					<button onClick={onConfirm}>Confirm</button>
					<button onClick={onCancel}>Cancel</button>
				</div>
			</div>
		</div>,
		document.getElementById("modal-root")
	);
}

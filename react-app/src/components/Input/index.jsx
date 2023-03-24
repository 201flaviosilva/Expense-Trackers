import styles from "./style.module.scss";

export default function Input({ value, setValue, labelStyle = "", ...otherProps }) {
	return (
		<label className={`${styles.label} ${labelStyle}`}>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				{...otherProps}
			/>
		</label>
	)
}

import { GoMarkGithub } from "react-icons/go";
import styles from "./style.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/201flaviosilva-labs/To-Do-Lists"
				target="_blank"
				rel="noreferrer"
			>
				<GoMarkGithub size={32} />
			</a>
		</footer>
	)
}

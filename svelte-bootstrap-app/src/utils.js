export function getColorByAmount(amount) {
	if (amount < 0) return "danger";
	else if (amount > 0) return "success";
	else return "dark";
}

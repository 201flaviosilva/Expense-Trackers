import moment from "moment";

/**
 * Formats the current date to the "YYYY-MM-DD" format.
 *
 * @returns {string} The formatted date.
 *
 * @example getTodayFormatted(); // Returns "2023-06-24"
 */
export function getTodayFormatted() {
	return moment(new Date()).format("YYYY-MM-DD");
}

/**
 * Generates a unique ID using Math.random().
 *
 * @returns {number} The generated unique ID.
 *
 * @example generateUniqueId(); // Returns a random number between 0 and 1
 */
export function generateUniqueId() { return Math.random(); }

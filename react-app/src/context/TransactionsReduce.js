import { generateUniqueId, getTodayFormatted } from "../utils";

/**
 * The local namespace used for storing data in local storage.
 * @type {string}
 */
export const LOCAL_NAME_SPACE = "React-App-Expense-Tracker";

/**
 * The initial state of transactions loaded from local storage or an empty array.
 * @type {Array<Object>}
 */
export const initialStateTransactions = JSON.parse(localStorage.getItem(LOCAL_NAME_SPACE)) || []; // Load from the local storage

/**
 * Action types used in the reducer.
 * @type {Object}
 */
export const actionTypes = {
	ADD: "add",
	EDIT: "edit",
	REMOVE: "remove",
	RESET: "reset",
};

/**
 * Reducer function for managing state updates based on the dispatched actions.
 *
 * @param {Array<Object>} state - The current state.
 * @param {Object} action - The dispatched action.
 * @returns {Array<Object>} The updated state.
 */
export function reducer(state, action) {
	switch (action.type) {
		case actionTypes.ADD:
			{
				const newTransaction = {
					id: generateUniqueId(),
					title: action.title || "empty",
					amount: action.amount || 0,
					date: action.date || getTodayFormatted(),
				};
				return [...state, newTransaction];
			}

		case actionTypes.EDIT:
			{
				return state.map(t => {
					if (t.id === action.id) return {
						...t,
						title: action.title || t.title,
						amount: action.amount || t.amount,
						date: action.date || t.date,
					};
					return t;
				});
			}

		case actionTypes.REMOVE:
			return state.filter(t => t.id !== action.id);

		case actionTypes.RESET:
			return [];

		default:
			return state;
	}
};

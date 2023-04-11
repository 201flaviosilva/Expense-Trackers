/**
 * @typedef Transaction
 * @type {object}
 * @property {number} id - The transaction identifier.
 * @property {string} title - The transaction title.
 * @property {boolean} amount - 
 * @property {boolean} date - 
 */

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const LOCAL_NAME_SPACE = "React-App-Expense-Tracker";

export default function App() {
  const localTransactions = JSON.parse(localStorage.getItem(LOCAL_NAME_SPACE)) || []; // Load from the local storage
  /**
   * @type {Transaction[]}
   */
  const [transactions, setTransactions] = useState(localTransactions);
  const [searchTransaction, setSearchTransaction] = useState("");

  // Update local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_NAME_SPACE, JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="App">
      <Header searchTransaction={searchTransaction} setSearchTransaction={setSearchTransaction} />
      <Main searchTransaction={searchTransaction} transactions={transactions} setTransactions={setTransactions} />
      <Footer />
    </div>
  );
}

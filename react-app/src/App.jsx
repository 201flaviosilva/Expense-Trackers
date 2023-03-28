/**
 * @typedef Task
 * @type {object}
 * @property {number} id - The task identifier.
 * @property {string} value - The task value/title.
 * @property {boolean} isCompleted - Indicates if the task is completed.
 */

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const mock = [
  { id: 1, value: "beep", isCompleted: false, },
  { id: 5, value: "isto é um exemplo de um titulo de uma task com 60 caracteres", isCompleted: false, },
  { id: 2, value: "cenas", isCompleted: true, },
  { id: 3, value: "boop", isCompleted: false, },
  { id: 4, value: "isto é um exemplo de um titulo super grande mesmo só para testar como fica no span, e que ainda pode ficar muito maior, porque pode haver pessoas que queiram escrever uma bruta de uma descrição aqui, talvez devesse era limitar o número de caracteres", isCompleted: true, },
  { id: 6, value: "boop", isCompleted: false, },
  { id: 7, value: "boop", isCompleted: false, },
  { id: 8, value: "boop", isCompleted: false, },
  { id: 9, value: "boop", isCompleted: false, },
  { id: 10, value: "boop", isCompleted: false, },
  { id: 11, value: "boop", isCompleted: false, },
  { id: 12, value: "boop", isCompleted: false, },
  { id: 13, value: "boop", isCompleted: false, },
  { id: 14, value: "boop", isCompleted: false, },
  { id: 15, value: "boop", isCompleted: false, },
  { id: 16, value: "boop", isCompleted: false, },
  { id: 17, value: "boop", isCompleted: false, },
  { id: 18, value: "boop", isCompleted: false, },
  { id: 19, value: "boop", isCompleted: false, },
  { id: 20, value: "boop", isCompleted: false, },
  { id: 21, value: "boop", isCompleted: false, },
  { id: 22, value: "boop", isCompleted: false, },
  { id: 23, value: "boop", isCompleted: false, },
  { id: 24, value: "boop", isCompleted: false, },
  { id: 25, value: "boop", isCompleted: false, },
  { id: 26, value: "boop", isCompleted: false, },
  { id: 27, value: "boop", isCompleted: false, },
  { id: 28, value: "boop", isCompleted: false, },
  { id: 29, value: "boop", isCompleted: false, },
]

export default function App() {
  /**
   * @type {Task[]}
   */
  const [tasks, setTasks] = useState([...mock]);
  const [searchTask, setSearchTask] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(searchTask ? tasks.filter(({ value }) => value.toUpperCase().includes(searchTask.toUpperCase())) : tasks);
  }, [searchTask, tasks]);


  return (
    <div className="App">
      <Header searchTask={searchTask} setSearchTask={setSearchTask} />
      <Main filteredTasks={filteredTasks} tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

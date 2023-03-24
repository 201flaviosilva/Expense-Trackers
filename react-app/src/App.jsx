import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [searchTask, setSearchTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(searchTask ? tasks.filter(({ value }) => value.includes(searchTask)) : tasks);
  }, [searchTask, tasks]);


  return (
    <div className="App">
      <Header searchTask={searchTask} setSearchTask={setSearchTask} />
      <Main filteredTasks={filteredTasks} tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

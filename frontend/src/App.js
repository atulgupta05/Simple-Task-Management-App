import React, { useEffect, useState } from "react";
import { fetchTasks } from "./services/api";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((res) => setTasks(res.data))
      .catch((error) => console.error("Failed to fetch tasks", error));
  }, [tasks]);
  

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
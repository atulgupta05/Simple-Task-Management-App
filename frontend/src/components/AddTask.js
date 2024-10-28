import React, { useState } from "react";
import { addTask } from "../services/api";

const AddTask = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    setError(""); // Clear error if input is valid

    addTask({ title, priority })
      .then(() => {
        setTasks((prev) => [...prev, { title, priority, completed: 0 }]);
        setTitle("");
        setPriority("Low");
      })
      .catch((error) => {
        console.error("Failed to add task:", error);
        setError("Failed to add task.");
      });
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddTask;
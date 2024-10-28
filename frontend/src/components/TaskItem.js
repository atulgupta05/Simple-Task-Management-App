import React, { useState } from "react";
import { deleteTask, updateTask } from "../services/api";

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleComplete = async () => {
    try {
      await updateTask(task.id, { ...task, completed: !task.completed });
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
      );
    } catch (error) {
      console.error("Error updating task completion:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    try {
      await updateTask(task.id, { ...task, title: newTitle });
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, title: newTitle } : t))
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task title:", error);
    }
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleSaveEdit}
          autoFocus
        />
      ) : (
        <span onDoubleClick={handleEdit}>{task.title}</span>
      )}
      <span>{task.priority}</span>
      <button onClick={handleComplete}>{task.completed ? "Undo" : "Complete"}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
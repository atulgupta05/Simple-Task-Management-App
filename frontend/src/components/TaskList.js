import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  // ----------------------Sorting tasks by priority---------------
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  const sortedTasks = tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;

import { useEffect, useState } from "react";
import API from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const completeTask = async (id) => {
    await API.put(`/tasks/${id}`, { status: "Completed" });
    setTasks(tasks.map(t => t._id === id ? { ...t, status: "Completed" } : t));
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          {task.status === "Pending" && (
            <button onClick={() => completeTask(task._id)}>Complete</button>
          )}

          {task.status === "Completed" && (
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;

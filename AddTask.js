import { useState } from "react";
import API from "../services/api";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    await API.post("/tasks", { title, description });
    alert("Task Added");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default AddTask;

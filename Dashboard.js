import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    API.get("/tasks").then(res => {
      setPending(res.data.filter(t => t.status === "Pending").length);
      setCompleted(res.data.filter(t => t.status === "Completed").length);
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Pending Tasks: {pending}</p>
      <p>Completed Tasks: {completed}</p>
    </div>
  );
}

export default Dashboard;

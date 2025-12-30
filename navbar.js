import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/add-task">Add Task</Link> |{" "}
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
}

export default navbar;

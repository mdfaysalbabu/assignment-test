import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && status) {
      setTasks([...tasks, { name, status }]);
      setName("");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    status === "All" ? true : task.status === status
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (a.status === "Active") return -1;
    if (b.status === "Active") return 1;
    if (a.status === "Completed") return -1;
    if (b.status === "Completed") return 1;
    return 0;
  });

  return (
    <>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded py-2 px-3 mr-2"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded py-2 px-3"
          >
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="All">All</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Submit
          </button>
        </form>

        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{task.name}</td>
                <td className="border px-4 py-2">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

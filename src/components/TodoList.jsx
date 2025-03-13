import { useState } from "react";

const TASKS = [
  { id: 1, name: "Acheter du lait", completed: false },
  { id: 2, name: "Faire du sport", completed: true },
  { id: 3, name: "Coder un projet React", completed: false },
];
export const TodoList = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const NewTask = {
        id: tasks.length + 1,
        name: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, NewTask]);
    }
    setInputValue("");
  };

  const handleDetete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "column",
        width: "300px",
        position: "relative",
        gap: "10px",
      }}
    >
      <h1>Todo List</h1>
      <div
        style={{
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          style={{
            cursor: "pointer",
          }}
          onClick={handleAddTask}
        >
          ADD
        </button>
      </div>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {" "}
              {task.name}
              <button onClick={() => handleDetete(index)}> delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import { useState } from "react";

const TASKS = [
  { id: 1, name: "Acheter du lait", completed: false },
  { id: 2, name: "Faire du sport", completed: true },
  { id: 3, name: "Coder un projet React", completed: false },
];
export const TodoList = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
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
          value={inputValue}
          onChange={handleChange}
          placeholder="Type here..."
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
            <li
              style={{
                marginRight: "10px",
              }}
              key={index}
            >
              {" "}
              {task.name}
              <button
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(index)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

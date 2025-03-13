import { useState } from "react";

const TASKS = [
  { id: 1, name: "Acheter du lait", completed: false },
  { id: 2, name: "Faire du sport", completed: true },
  { id: 3, name: "Coder un projet React", completed: false },
];

export const TodoList = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [inputValue, setInputValue] = useState("");

  // Styles unifiés
  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: "500px",
      margin: "2rem auto",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      backgroundColor: "#ffffff",
    },
    header: {
      color: "#2d3436",
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    inputContainer: {
      display: "flex",
      gap: "12px",
      marginBottom: "2rem",
    },
    input: {
      flex: 1,
      padding: "12px 16px",
      border: "2px solid #dfe6e9",
      borderRadius: "8px",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      outline: "none",
    },
    addButton: {
      padding: "12px 24px",
      backgroundColor: "#0984e3",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.2s ease",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      padding: "16px",
      marginBottom: "12px",
      borderRadius: "8px",
      backgroundColor: "#f8f9fa",
      transition: "all 0.2s ease",
    },
    completedTask: {
      textDecoration: "line-through",
      opacity: 0.7,
    },
    deleteButton: {
      marginLeft: "auto",
      backgroundColor: "#ff7675",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "6px 12px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: tasks.length + 1,
        name: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    setInputValue("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleTaskClick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Todo List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche..."
          value={inputValue}
          onChange={handleInputChange}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = "#0984e3")}
          onBlur={(e) => (e.target.style.borderColor = "#dfe6e9")}
        />
        <button
          style={styles.addButton}
          onClick={handleAddTask}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0873c4")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0984e3")}
        >
          Ajouter
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              ...(task.completed && styles.completedTask),
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskClick(task.id)}
              style={{
                marginRight: "12px",
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            />
            {task.name}
            <button
              style={styles.deleteButton}
              onClick={() => handleDelete(index)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e74c3c")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff7675")}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

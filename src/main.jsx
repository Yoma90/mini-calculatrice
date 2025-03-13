import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
// import CompteurSimple from "./components/CompteurSimple";
import { TodoList } from "./components/TodoList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      {/* <CompteurSimple /> */}
      <TodoList />
    </ThemeProvider>
  </StrictMode>
);

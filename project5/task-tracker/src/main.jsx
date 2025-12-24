import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import { TaskProvider } from "./store/taskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TaskProvider>
      <App />
    </TaskProvider>
  </BrowserRouter>
);

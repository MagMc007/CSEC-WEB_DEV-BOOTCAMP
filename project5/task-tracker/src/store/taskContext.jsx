import { createContext, useContext, useEffect, useState } from "react";

// Create context
const TaskContext = createContext();

// Custom hook for easy access
export const useTasks = () => useContext(TaskContext);

// Provider component
export const TaskProvider = ({ children }) => {
  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = (text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // Toggle completion
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Dark mode state  and toggle
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? JSON.parse(storedMode) : false;
  });

   const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);


  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, toggleDarkMode, }}
    >
      {children}
    </TaskContext.Provider>
  );
};

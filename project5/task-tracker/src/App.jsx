import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import { useTasks } from "./store/taskContext";
import { useEffect } from "react";

function App() {
  const { darkMode } = useTasks();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}

export default App;

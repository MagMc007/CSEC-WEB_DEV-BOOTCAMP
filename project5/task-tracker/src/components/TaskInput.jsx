import { useState } from "react";
import { useTasks } from "../store/taskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>
        Add Task
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  input: {
    flex: "1",
    padding: "0.5rem",
    minWidth: "200px",
  },
  button: {
    padding: "0.5rem 1rem",
  },
};

export default TaskInput;

import { useTasks } from "../store/taskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={styles.text}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)} style={styles.delete}>
        Delete
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem",
    borderBottom: "1px solid #ccc",
    gap: "0.5rem",
  },
  text: {
    flex: 1,
    marginLeft: "0.5rem",
  },
  delete: {
    padding: "0.3rem 0.6rem",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  completed: {
    textDecoration: "line-through",
    opacity: 0.6,
  },
};

export default TaskItem;

import TaskItem from "./TaskItem";
import { useTasks } from "../store/taskContext";

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

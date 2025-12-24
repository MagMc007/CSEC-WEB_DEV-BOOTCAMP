import Header from "../components/Header";
import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h2>Task Statistics</h2>
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <h3>Total Tasks</h3>
            <p>{total}</p>
          </div>
          <div style={styles.statBox}>
            <h3>Completed Tasks</h3>
            <p>{completed}</p>
          </div>
          <div style={styles.statBox}>
            <h3>Remaining Tasks</h3>
            <p>{remaining}</p>
          </div>
        </div>
      </main>
    </>
  );
};

const styles = {
  statsContainer: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "1rem",
  },
  statBox: {
    flex: "1 1 150px",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
};

export default Stats;

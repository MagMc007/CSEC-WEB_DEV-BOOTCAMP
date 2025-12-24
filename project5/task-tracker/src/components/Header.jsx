import { Link } from "react-router-dom";
import { useTasks } from "../store/taskContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTasks();
    //console.log("Dark mode value:", darkMode);
  return (
    <header style={styles.header}>
      <h1>Task Tracker</h1>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/stats" style={styles.link}>Stats</Link>
      </nav>

      <button onClick={toggleDarkMode} style={styles.button}>
       {darkMode ? (
          <>
            <i className="bi bi-sun-fill" style={{ marginRight: "0.5rem" }}></i>
            Light Mode
          </>
        ) : (
          <>
            <i className="bi bi-moon-fill" style={{ marginRight: "0.5rem" }}></i>
            Dark Mode
          </>
        )}
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    gap: "1rem",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "bold",
  },
  button: {
    padding: "0.5rem 1rem",
  },
};

export default Header;

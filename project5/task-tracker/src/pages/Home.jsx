import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <h2>Tasks</h2>
            <TaskInput />
            <TaskList />
      </main>
    </>
  );
};

export default Home;

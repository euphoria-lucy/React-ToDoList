// import logo from "./logo.svg";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoCreate from "./components/ToDoCreate";
import ToDoTemplate from "./components/ToDoTemplate";

function App() {
  return (
    <>
      <ToDoTemplate>
        <div className="container">
          <ToDoHeader />
          <div className="spacer"></div>
          <ToDoCreate />
        </div>
      </ToDoTemplate>
    </>
  );
}

export default App;

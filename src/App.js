// import logo from "./logo.svg";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoTemplate from "./components/ToDoTemplate";

function App() {
  return (
    <ToDoTemplate>
      <ToDoHeader></ToDoHeader>
    </ToDoTemplate>
  );
}

export default App;

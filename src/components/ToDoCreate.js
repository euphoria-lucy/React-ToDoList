/* ToDoCreate.js
할 일 등록하는 컴포넌트 */

import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoListItem from "./ToDoListItem";

function ToDoCreate() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        id: Date.now(),
        content: inputValue,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <ToDoListItem
        todos={todos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <ToDoInput
        inputValue={inputValue}
        handleKeyPress={handleKeyPress}
        handleChange={handleChange}
      />
    </>
  );
}

export default ToDoCreate;

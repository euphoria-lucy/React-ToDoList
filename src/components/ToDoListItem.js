/* ToDoListItem.js
할 일 보여주는 컴포넌트 */

import React from "react";
import styled from "styled-components";

const ToDoList = styled.div`
  width: 720px;
  height: 430px;
  margin: 0 auto;
  overflow-y: auto;
  background: #ffeaf1;
  font-family: "BMJUA", sans-serif;
`;

const ToDoItem = styled.div`
  width: 660px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  margin-top: 20px;
  padding: 0 10px;
  font-size: 17px;
  margin-left: auto;
  margin-right: auto;
  transition: background 0.3s ease;
  ${({ checked }) => checked && "background: #f4e2e8; opacity: 0.5;"}
`;

const CheckBox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const TrashCan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ToDoListItem({ todos, handleCheck, handleDelete }) {
  return (
    <ToDoList>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} checked={todo.checked}>
          <CheckBox
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheck(todo.id)}
          />
          {todo.content}
          <TrashCan onClick={() => handleDelete(todo.id)}>
            <img alt="휴지통" src="img/garbage.png" />
          </TrashCan>
        </ToDoItem>
      ))}
    </ToDoList>
  );
}

export default ToDoListItem;

/* ToDoCreate.js
할 일 등록하는 컴포넌트 */

import React, { useState } from "react";
import styled from "styled-components";

// 폰트설정
const FontFace = `
  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

// 목록 박스 설정 블럭
// const ListBlock = styled.div`
//   width: 720px;
//   height: 450px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column-reverse;
//   background: lavender;
// `;

// 입력 박스 설정 블럭
const InputBlock = styled.div`
  width: 720px;
  height: 200px;
  background: #ffeaf1;
  border-radius: 0 0 15px 15px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  border-top: 3px solid pink;
`;

// 할 일 목록 나타남
const ToDoList = styled.div`
  width: 720px;
  height: 430px;
  margin: 0 auto;
  overflow-y: auto;
  // background: coral;
  background: #ffeaf1;
  font-family: "BMJUA", sans-serif;
`;

// 입력 값 나오는 네모박스
const ToDoItem = styled.div`
  width: 660px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: #f4e2e8;
  border-radius: 15px;
  margin-top: 20px;
  // margin-bottom: 20px;
  padding: 0 10px;
  font-size: 17px;
  // 가운데 정렬
  margin-left: auto;
  margin-right: auto;
  transition: background 0.3s ease; /* 트랜지션 효과 추가 */
  ${({ checked }) =>
    checked &&
    "background: #f4e2e8; opacity: 0.5;"}/* 체크된 경우 배경색과 투명도 변경 */
`;

// 체크박스
const CheckBox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

// 삭제 이모지
const TrashCan = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // margin-left: 10px;
  // // width: 50px;
  // // height: 50px;
  // width: 50px;
  // height: 50px;
  // // background-color: #f8c3cd;
  // border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 10px;
  // height: 10px;
`;

// 입력박스 (할 일 입력후....)
const Input = styled.input`
  font-size: 20px;
  color: #848383;
  text-align: center;
  width: 660px;
  height: 50px;
  outline: none;
  background: #f4e2e8;
  border-radius: 15px;
  border: 2px solid #ffeaf1;
  // margin-bottom: 20px;
`;

function ToDoCreate() {
  <style>{FontFace}</style>;

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

      <InputBlock>
        <Input
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="할 일 입력 후 Enter를 누르세요"
          style={{ fontFamily: "BMJUA" }}
        />
      </InputBlock>
    </>
  );
}

export default ToDoCreate;

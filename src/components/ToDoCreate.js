/* ToDoCreate.js
할 일 등록하는 컴포넌트 */

import React, { useState } from "react";
import styled from "styled-components";

const FontFace = `
  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const InputBlock = styled.div`
  width: 720px;
  height: 130px;
  background: #ffeaf1;
  border-radius: 0 0 15px 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 20px;
  color: #848383;
  text-align: center;
  width: 660px;
  height: 50px;
  outline: none;
  background: #f4e2e8;
  font-family: "BMJUA", sans-serif;
  border-radius: 15px;
  border: 2px solid #ffeaf1;
`;

function ToDoCreate() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("입력된 값:", inputValue);
      setInputValue(""); // 입력창 초기화
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <style>{FontFace}</style>

      <InputBlock>
        <Input
          placeholder="할 일 입력 후 Enter를 누르세요"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </InputBlock>
    </>
  );
}

export default ToDoCreate;

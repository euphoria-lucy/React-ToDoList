/* ToDoInput.js
할 일을 입력하는 컴포넌트 */

import React from "react";
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
`;

function ToDoInput({ inputValue, handleKeyPress, handleChange }) {
  return (
    <>
      <style>{FontFace}</style>
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

export default ToDoInput;

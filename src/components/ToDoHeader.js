// /* ToDoHeader.js
// 날짜, 요일, 할 일 갯수 보여주는 컴포넌트 */

import React from "react";
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

const ToDoHeadBlock = styled.div`
  width: 720px;
  height: 240px;
  border-radius: 15px 15px 0 0;
  background: #ffeaf1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid pink;
`;

const DateText = styled.p`
  font-size: 40px;
  font-family: "BMJUA", sans-serif;
  position: absolute;
  // top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background: inherit;
  white-space: nowrap;
  // padding: 10px;
`;

function ToDoHeader() {
  const date = new Date();
  const dayOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("ko-KR", dayOptions);

  return (
    <>
      {/* @font-face 규칙 삽입 */}
      <style>{FontFace}</style>

      <ToDoHeadBlock>
        <DateText>{formattedDate}</DateText>
      </ToDoHeadBlock>
    </>
  );
}

export default ToDoHeader;

/* ToDoTemplate.js
레이아웃 설정하는 컴포넌트 */

import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  width: 720px;
  height: 870px;
  background: #ffeaf1;

  position: relative;
  display: flex;
  border-radius: 15px;

  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: auto;
  margin-right: auto;
`;

function ToDoTemplate({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default ToDoTemplate;

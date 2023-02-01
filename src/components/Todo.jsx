import React from "react";
import styled from "styled-components";

function Todo() {
  return <TodoTitle>To-Do List</TodoTitle>;
}
export default Todo;

export const TodoTitle = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
`;

import React from "react";
import styled from "styled-components";
import Todo from "../components/Todo";
function TodoPage() {
  return (
    <TodoWrapper>
      <Todo />
    </TodoWrapper>
  );
}
export default TodoPage;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #ffff;
`;
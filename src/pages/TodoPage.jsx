import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Todo from "../components/Todo";
function TodoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(`/`);
    }
  }, [navigate]);

  return (
    <TodoWrapper>
      <Todo />
    </TodoWrapper>
  );
}
export default TodoPage;

export const TodoWrapper = styled.div`
  background-color: #ffff;
`;

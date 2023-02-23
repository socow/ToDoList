import { useEffect } from "react";
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
    <TodoContainer>
      <Todo />
    </TodoContainer>
  );
}
export default TodoPage;

export const TodoContainer = styled.div`
  background-color: #ffff;
  margin: auto;
  max-width: 600px;
`;

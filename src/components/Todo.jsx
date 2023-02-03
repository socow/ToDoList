import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { createTodoRequest, todoRequest } from "../apis/todo";

function Todo() {
  const [todoData, setTodoData] = useState();
  const [todoValue, setTodoValue] = useState("");

  const getTodo = useCallback(() => todoRequest(setTodoData), [setTodoData]);
  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const createTodo = () => {
    createTodoRequest(todoValue, setTodoValue, todoData, setTodoData);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue(value);
    e.preventDefault();
  };

  return (
    <TodoContainer>
      <TodoBlock>
        <TodoTitle>
          <h1>할 일 목록</h1>
        </TodoTitle>
        <TodoInputBox>
          <TodoInput
            data-testid="new-todo-input"
            name="todo"
            placeholder="해야 할 일을 입력하세요."
            value={todoValue}
            onChange={handleChange}
          />
          <TodoSubmit
            data-testid="new-todo-add-button"
            type="submit"
            onClick={createTodo}
          >
            추가
          </TodoSubmit>
        </TodoInputBox>
        {todoData?.map(({ id, isCompleted, todo }) => (
          <TodoListWaper key={id}>
            <CheckBox type="checkbox" defaultChecked={isCompleted} />
            <span>{todo}</span>
            <DeleteButton>X</DeleteButton>
            <TodoModify>수정</TodoModify>
          </TodoListWaper>
        ))}
      </TodoBlock>
    </TodoContainer>
  );
}
export default Todo;

const TodoTitle = styled.div``;
const TodoContainer = styled.div`
  margin: auto;
  max-width: 600px;
`;

const TodoBlock = styled.div`
  padding: 30px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
`;
const TodoListWaper = styled.li`
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  list-style: none;
  text-decoration: none;
`;
const CheckBox = styled.input``;
const TodoModify = styled.button`
  background-color: #fff;
  border: none;
  padding: 5px 9px;
  cursor: pointer;
  float: right;
`;
const DeleteButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;
const TodoInputBox = styled.form`
  display: flex;
`;
const TodoInput = styled.input`
  flex: 10;
  padding: 5px;
`;
const TodoSubmit = styled.button`
  flex: 1;
  border: none;
  border-radius: 5%;
  background-color: #fff;
  cursor: pointer;
`;

import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { createTodoRequest, todoRequest } from "../apis/todo";
import TodoList from "./TodoList";
import { isCompletedSelector, todoState } from "../atoms/TodoState";
import { useRecoilState, useRecoilValue } from "recoil";

function Todo() {
  const [todoData, setTodoData] = useRecoilState(todoState);
  const [todoValue, setTodoValue] = useState("");
  const theRest = useRecoilValue(isCompletedSelector);

  const getTodo = useCallback(() => todoRequest(setTodoData), [setTodoData]);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const createTodo = (e) => {
    e.preventDefault();
    createTodoRequest(todoValue, setTodoValue, todoData, setTodoData);
  };

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <TodoContainer>
      <TodoBlock>
        <TodoTitle>
          <h1>할 일 목록</h1>
          <h2>남은 할 일 {theRest}개</h2>
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
          <TodoList
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            getTodo={getTodo}
          />
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

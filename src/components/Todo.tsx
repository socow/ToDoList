import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { TodoRequset } from "../apis/todo";
import TodoList from "./TodoList";
import { isCompletedSelector, todoState } from "../store/todo.recoil";
import { useRecoilState, useRecoilValue } from "recoil";

function Todo() {
  const [todoData, setTodoData] = useRecoilState(todoState);
  const [todoValue, setTodoValue] = useState("");
  const theRest = useRecoilValue(isCompletedSelector);

  const getTodo = useCallback(
    () => TodoRequset.get(setTodoData),
    [setTodoData]
  );

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const createTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = await TodoRequset.create(todoValue);
    setTodoData((prev) => [...prev, data]);
    setTodoValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  return (
    <TodoBlock>
      <TodoTitle>
        <h1>할 일 목록</h1>
        <h2>남은 할 일 {theRest}개</h2>
      </TodoTitle>
      <TodoInputBox>
        <TodoInput
          name="todo"
          placeholder="해야 할 일을 입력하세요."
          value={todoValue}
          onChange={handleChange}
        />
        <TodoSubmit type="submit" onClick={createTodo}>
          추가
        </TodoSubmit>
      </TodoInputBox>
      {todoData?.map(({ id, isCompleted, todo }) => (
        <TodoList key={id} id={id} todo={todo} isCompleted={isCompleted} />
      ))}
    </TodoBlock>
  );
}
export default Todo;

const TodoBlock = styled.div`
  padding: 30px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
`;
const TodoTitle = styled.div``;

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

import React from "react";
import styled from "styled-components";
import { dleteRequset } from "../apis/todo";

function TodoList({ id, isCompleted, todo, getTodo }) {
  const deleteTodo = () => {
    dleteRequset(id);
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  return (
    <>
      <TodoListWaper key={id} id={id}>
        <CheckBox type="checkbox" defaultChecked={isCompleted} />
        <span>{todo}</span>
        <DeleteButton onClick={deleteTodo}>X</DeleteButton>
        <TodoModify>수정</TodoModify>
      </TodoListWaper>
    </>
  );
}
export default TodoList;

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

import React, { useState } from "react";
import styled from "styled-components";
import { dleteRequset, updateTodoRequest } from "../apis/todo";

function TodoList({ id, isCompleted, todo, getTodo }) {
  const [isUpdata, setIsUpdata] = useState(true);
  const [check, setCheck] = useState(isCompleted);
  const [todoValue, setTodoValue] = useState("");
  const [before, setBefore] = useState(isCompleted);
  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue(value);
    e.preventDefault();
  };

  const deleteTodo = () => {
    dleteRequset(id);
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  const updateTodo = () => {
    updateTodoRequest(setIsUpdata, id, todoValue, {
      isCompleted: check,
    });
    setTimeout(() => {
      getTodo();
    }, 200);
  };
  const modifyContent = () => {
    setIsUpdata(false);
    setTodoValue(todo);
    setBefore(check);
  };

  const deleteContent = () => {
    setIsUpdata(true);
    setCheck(before);
  };

  return (
    <>
      <TodoListWaper check={check}>
        {isUpdata ? (
          <>
            <CheckBox
              type="checkbox"
              onClick={() => setCheck((prev) => !prev)}
              defaultChecked={isCompleted}
            />
            <span>{todo}</span>
            <DeleteButton data-testid="delete-button" onClick={deleteTodo}>
              X
            </DeleteButton>
            <TodoModify data-testid="modify-button" onClick={modifyContent}>
              수정
            </TodoModify>
          </>
        ) : (
          <>
            <CheckBox
              type="checkbox"
              defaultChecked={isCompleted}
              onClick={() => setCheck((prev) => !prev)}
            />
            <input
              data-testid="modify-input"
              value={todoValue}
              onChange={handleChange}
            />
            <DeleteButton data-testid="cancel-button" onClick={deleteContent}>
              취소
            </DeleteButton>
            <TodoModify data-testid="submit-button" onClick={updateTodo}>
              제출
            </TodoModify>
          </>
        )}
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
  span {
    margin-left: 8px;
    text-decoration: ${(props) => (props.check ? " line-through" : "none")};
  }
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

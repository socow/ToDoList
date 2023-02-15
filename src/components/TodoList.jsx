import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { dleteRequset, updateTodoRequest } from "../apis/todo";

function TodoList({ id, isCompleted, todo, getTodo }) {
  const [isUpdata, setIsUpdata] = useState(true);
  const [check, setCheck] = useState(isCompleted);
  const [todoValue, setTodoValue] = useState("");
  const [before, setBefore] = useState(isCompleted);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setTodoValue(value);
      e.preventDefault();
    },
    [setTodoValue]
  );

  const deleteTodo = () => {
    dleteRequset(id, getTodo);
  };

  const updateTodo = () => {
    const isCompleted = check;
    const todo = todoValue;
    updateTodoRequest(setIsUpdata, id, todo, isCompleted, getTodo);
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
            <DeleteButton onClick={deleteTodo}>X</DeleteButton>
            <TodoModify onClick={modifyContent}>수정</TodoModify>
          </>
        ) : (
          <>
            <CheckBox
              type="checkbox"
              defaultChecked={isCompleted}
              onClick={() => setCheck((prev) => !prev)}
            />
            <input value={todoValue} onChange={handleChange} />
            <DeleteButton onClick={deleteContent}>취소</DeleteButton>
            <TodoModify onClick={updateTodo}>제출</TodoModify>
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

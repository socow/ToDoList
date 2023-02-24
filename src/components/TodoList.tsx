import React, { FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { TodoRequset } from "../apis/todo";
import { Todo } from "../model/Todo";
import { todoState } from "../store/todo.recoil";
import { useSetRecoilState } from "recoil";
function TodoList({ id, isCompleted, todo }: Todo) {
  const setTodoData = useSetRecoilState(todoState);
  const [isUpdata, setIsUpdata] = useState(true);
  const [check, setCheck] = useState(isCompleted);
  const [todoValue, setTodoValue] = useState("");
  const [before, setBefore] = useState(isCompleted);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTodoValue(value);
      e.preventDefault();
    },
    [setTodoValue]
  );

  const deleteTodo = () => {
    if (isUpdata) {
      TodoRequset.dlete(id);
      setTodoData((prev) => prev.filter((todo) => todo.id !== id));
    } else if (!isUpdata) {
      setIsUpdata(true);
      setCheck(before);
    }
  };

  const modifyContent = async (e: FormEvent) => {
    e.preventDefault();
    if (isUpdata) {
      setIsUpdata(false);
      setTodoValue(todo);
      setBefore(check);
    } else if (!isUpdata) {
      const res = await TodoRequset.update(id, todoValue, check);
      setTodoData((prev) =>
        prev.map((todo: Todo) => (todo.id === res.id ? res : todo))
      );
      setIsUpdata(true);
    }
  };

  return (
    <TodoListWaper check={check}>
      <CheckBox
        type="checkbox"
        onClick={() => setCheck((prev) => !prev)}
        defaultChecked={isCompleted}
      />
      {isUpdata ? (
        <span>{todo}</span>
      ) : (
        <input value={todoValue} onChange={handleChange} />
      )}
      <DeleteButton onClick={deleteTodo}>
        {isUpdata ? "X" : "취소"}
      </DeleteButton>
      <TodoModify onClick={modifyContent}>
        {isUpdata ? "수정" : "제출"}
      </TodoModify>
    </TodoListWaper>
  );
}
export default TodoList;

const TodoListWaper = styled.li<{ check: boolean }>`
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

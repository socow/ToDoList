import { instance } from "./api";

const TODO_URL = "/todos";

export const todoRequest = (setTodoData) => {
  instance
    .get(TODO_URL)
    .then((res) => setTodoData(res.data))
    .catch((error) => {});
};

export const createTodoRequest = (
  todo,
  setTodoValue,
  todoData,
  setTodoData
) => {
  instance
    .post(TODO_URL, {
      todo,
    })
    .then((res) => {
      setTodoData([
        ...todoData,
        {
          id: res.data.id,
          todo: res.data.todo,
          isCompleted: res.data.isCompleted,
          userId: res.data.userId,
        },
      ]);
      setTodoValue("");
    })
    .catch((error) => {});
};

export const dleteRequset = (id) => {
  instance.delete(`${TODO_URL}/${id}`);
};

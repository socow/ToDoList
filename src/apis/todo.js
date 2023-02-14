import { instance } from "./api";

const TODO_URL = "/todos";

export const todoRequest = async (setTodoData) => {
  await instance
    .get(TODO_URL)
    .then((res) => setTodoData(res.data))
    .catch((error) => {});
};

export const createTodoRequest = async (
  todo,
  setTodoValue,
  todoData,
  setTodoData
) => {
  await instance
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

export const dleteRequset = async (id, getTodo) => {
  await instance.delete(`${TODO_URL}/${id}`).then((response) => {
    getTodo();
  });
};

export const updateTodoRequest = (
  setIsUpdata,
  id,
  todo,
  isCompleted,
  getTodo
) => {
  setIsUpdata(true);
  instance
    .put(`${TODO_URL}/${id}`, {
      todo,
      isCompleted,
    })
    .catch((err) => console.error(err))
    .then((response) => {
      getTodo();
    });
};

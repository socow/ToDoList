import { instance } from "./api";

const TODO_URL = "/todos";

export const TodoRequset = {
  async get(setTodoData) {
    instance
      .get(TODO_URL)
      .then((res) => setTodoData(res.data))
      .catch((error) => {});
  },

  async create(todo, setTodoValue, todoData, setTodoData) {
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
  },

  async dlete(id, getTodo) {
    instance.delete(`${TODO_URL}/${id}`).then((response) => {
      getTodo();
    });
  },

  async update(setIsUpdata, id, todo, isCompleted, getTodo) {
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
  },
};

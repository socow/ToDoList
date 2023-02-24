import { instance } from "./api";

const TODO_URL = "/todos";

export const TodoRequset = {
  async get(setTodoData: React.Dispatch<React.SetStateAction<any>>) {
    try {
      const res = await instance.get(TODO_URL);
      if (res.status === 200) return setTodoData(res.data);

      throw new Error("API통신 실패");
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },
  async create(todo: string) {
    try {
      const res = await instance.post(TODO_URL, { todo });
      if (res.status === 201) return res.data;

      throw new Error("API통신 실패");
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },

  async dlete(id: number) {
    try {
      const res = await instance.delete(`${TODO_URL}/${id}`);
      if (res.status === 204) return res.data;
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },

  async update(id: number, todo: string, isCompleted: boolean) {
    try {
      const res = await instance.put(`${TODO_URL}/${id}`, {
        todo,
        isCompleted,
      });
      if (res.status === 200) return res.data;
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },
};

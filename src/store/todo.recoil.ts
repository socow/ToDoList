import { atom, selector } from "recoil";
import { Todo } from "src/model/Todo";

export const todoState = atom<Todo[]>({
  key: "todoState",
  default: [],
});

export const isCompletedSelector = selector({
  key: "isCompletedSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos.filter(({ isCompleted }) => !isCompleted).length;
  },
});

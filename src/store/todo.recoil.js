import { atom, selector } from "recoil";

export const todoState = atom({
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

import { atom, selector } from "recoil";
import { AuthRequest } from "../apis/auth";

export const emailState = atom({
  key: "email",
  default: "",
});
export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const inputValueSelector = selector({
  key: "inputValueSelector",
  get: ({ get }) => {
    const email = get(emailState);
    const emailReg = /^[a-zA-Z0-9._%+-]+@/g;
    const password = get(passwordState);
    return !(emailReg.test(email) && password.length >= 8);
  },
});

export const loginPost = selector({
  key: "loginPost",
  get: ({ get }) => {
    const email = get(emailState);
    const password = get(passwordState);
    const authSubmit = async (e) => {
      await AuthRequest.login(email, password);
    };
    return authSubmit;
  },
});

export const signupPost = selector({
  key: "signupPost",
  get: ({ get }) => {
    const email = get(emailState);
    const password = get(passwordState);
    const signupSubmit = async (e) => {
      await AuthRequest.signup(email, password);
    };
    return signupSubmit;
  },
});

import { instance } from "./api";

const LOGIN_URL = `/auth/signin`;

export const loginRequest = (email, password) => {
  instance
    .post(LOGIN_URL, {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.access_token);
      window.location.replace("/todo");
    })
    .catch((error) => {
      alert("아이디 또는 비밀번호를 확인해주세요");
    });
};

import { instance } from "./api";

const SIGNUP_URL = `/auth/signup`;

export const signupRequest = (email, password) => {
  if (email === "" && password === "") {
    return alert("아이디 또는 비밀번호를 입력해주세요");
  } else if (!email.includes("@")) {
    return alert("이메일을 확인해주세요");
  } else if (password.length < 8) {
    return alert("비밀번호를 확익해주세요");
  }
  instance
    .post(SIGNUP_URL, {
      email,
      password,
    })
    .then((res) => {
      alert("회원가입이 완료되었습니다");
      window.location.replace("/");
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("입력 정보를 확인해주세요");
      }
      console.error(error.message);
    });
};

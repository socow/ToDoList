import { instance } from "./api";

const URLS = {
  LOGIN: `/auth/signin`,
  SIGNUP: `/auth/signup`,
};

export const authRequest = {
  async login(email, password) {
    instance
      .post(URLS.LOGIN, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        window.location.replace("/todo");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert(error.response.data.message);
        }
      });
  },

  async signup(email, password) {
    instance
      .post(URLS.SIGNUP, {
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
        }
      });
  },
};

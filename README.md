## DEMO

DEMO : [DEMO](https://velvety-rugelach-f5ddc4.netlify.app)

# 프로젝트 설치 및 실행 방법

```
$ npm install
$ npm start
```

# 주요기능

1.로그인/회원가입<br>
2.To-DO List /작성/조회/수정/삭제 3.남은 할 일 표시

# 폴더 구조

```

📦 src
┣ 📂apis
┃  ┣ 📜 api.js
┃  ┣ 📜 login.js
┃  ┣ 📜 signup.js
┃  ┗ 📜 todo.js
┣ 📂store
┃  ┣ 📜 auth.recoil.jsx
┃  ┗ 📜 todo.recoil.js
┣ 📂components
┃   ┣ 📜 Login.jsx
┃   ┣ 📜 SignUp.jsx
┃   ┣ 📜 Todo.jsx
┃   ┗ 📜 TodoLIst.jsx
┣ 📂pages
┃  ┣ 📜 LoginPages.jsx
┃  ┣ 📜 SignupPages.jsx
┃  ┗ 📜 TodoPages.jsx
┃
┣ 📜 App.js
┗ 📜 index.js




1. apis : api 통신 함수 관리
2. atoms : recoil 관련된 파일을 저장한 폴더
3. Components : 공통된 컴포넌트 관리
4. pages : 페이지 단위 컴포넌트 폴더


```

## 1. 로그인 / 회원가입

- 회원가입 이메일, 비밀번호 유효성 검사
  src/store/auth.recoil.js

```javascript
export const inputValueSelector = selector({
  key: "inputValueSelector",
  get: ({ get }) => {
    const email = get(emailState);
    const emailReg = /^[a-zA-Z0-9._%+-]+@/g;
    const password = get(passwordState);
    return !(emailReg.test(email) && password.length >= 8);
  },
});
```

- 로그인 form submit 함수

```javascript
export const loginPost = selector({
  key: "loginPost",
  get: ({ get }) => {
    const email = get(emailState);
    const password = get(passwordState);
    const loginSubmit = async (e) => {
      await e.preventDefault();
      loginRequest(email, password);
    };
    return loginSubmit;
  },
});
```

- 로그인 post 요청

```javascript
const LOGIN_URL = `/auth/signin`;

export const loginRequest = async (email, password) => {
  await instance
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
```

회원가입, 로그인 컴포넌트에서 유효성 검사 함수, api 요청부를
분리하여 기능별로 쉽게 구분할 수 있도록 작성했습니다

## 2. 리다이렉션

```javascript
const navigate = useNavigate();

useEffect(() => {
  if (localStorage.getItem("token")) {
    navigate(`/todo`);
  }
}, [navigate]);
```

`useEffect`를 이용해 페이지 렌더링시에 토큰의 유무를 확인하여 간단하게 페이지 리다이렉션이 가능하도록 작성했습니다

## 3. TODO CRUD

- axios inpercepter 사용
  `src/apis/api.js`

```javascript
import axios from "axios";

const ACCESS_TOKEN = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    if (ACCESS_TOKEN) {
      config.headers = { Authorization: `Bearer ${ACCESS_TOKEN}` };
    } else {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
```

`axios inpercepter` 를 통해서 api 통신시 반복되는 header, token을
생략할 수 있도록 코드 작성, 불필요한 코드 반복을 피하고 가독성을 높일 수 있었습니다

## 3.useCallback

- useCallback 사용

```javascript
const getTodo = useCallback(() => todoRequest(setTodoData), [setTodoData]);
```

useCallback을 사용하여 함수를 재 선언 하는것을 방지하였습니다

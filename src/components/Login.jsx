import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginRequest } from "../apis/login";
function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    e.preventDefault();
  };

  const validation = !(
    inputValue.email.includes("@") && inputValue.password.length > 7
  );

  const goToSiginup = (e) => {
    navigate(`/Signup`);
    e.preventDefault();
  };
  const loginSubmit = (e) => {
    const email = inputValue.email;
    const password = inputValue.password;
    e.preventDefault();
    loginRequest(email, password);
  };
  return (
    <LoginForm onSubmit={loginSubmit}>
      <Titie>로그인</Titie>
      <EmailWrap>
        <Email
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="이메일"
          value={inputValue.email}
          onChange={handleChange}
        />
      </EmailWrap>
      <PasswordWrap>
        <Password
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={inputValue.password}
          onChange={handleChange}
        />
      </PasswordWrap>
      <ButtonWrap>
        <LoginButton data-testid="signin-button" disabled={validation}>
          로그인
        </LoginButton>
        <SignupButton data-testid="signup-button" onClick={goToSiginup}>
          회원가입
        </SignupButton>
      </ButtonWrap>
    </LoginForm>
  );
}
export default Login;

export const LoginForm = styled.form`
  width: 33%;
  height: 50vh;
  background-color: #ffff;
  border-radius: 5px;
`;

export const Titie = styled.div`
  text-align: center;
  margin: 35px;
  font-size: 40px;
`;

export const EmailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const PasswordWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;
export const Email = styled.input`
  height: 30px;
  width: 70%;
`;
export const Password = styled.input`
  height: 30px;
  width: 70%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginButton = styled.button`
  height: 30px;
  width: 70%;
  padding: 5px 36px;
  margin: 5px;
  background-color: #ff8000e3;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
  }
`;
export const SignupButton = styled.button`
  height: 30px;
  width: 70%;
  padding: 5px 30px;
  margin: 5px;
  background-color: #ff8000e3;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;

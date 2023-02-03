import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signupRequest } from "../apis/signup";
import {
  Titie,
  EmailWrap,
  Email,
  PasswordWrap,
  Password,
  ButtonWrap,
  SignupButton,
  LoginButton,
} from "./Login";
function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const goToLogin = () => {
    navigate(`/`);
  };

  const validation = !(
    inputValue.email.includes("@") && inputValue.password.length >= 8
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value });
      e.preventDefault();
    },
    [inputValue]
  );

  const signupSubmit = (e) => {
    const email = inputValue.email;
    const password = inputValue.password;
    e.preventDefault();
    signupRequest(email, password);
  };

  return (
    <SignupForm onSubmit={signupSubmit}>
      <Titie>회원가입</Titie>
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
          placeholder="비밀번호를 입력해주세요"
          value={inputValue.password}
          onChange={handleChange}
        />
      </PasswordWrap>
      <ButtonWrap>
        <SignupButton data-testid="signup-button" disabled={validation}>
          회원가입
        </SignupButton>
        <LoginButton data-testid="signin-button" onClick={goToLogin}>
          로그인
        </LoginButton>
      </ButtonWrap>
    </SignupForm>
  );
}
export default Signup;

const SignupForm = styled.form`
  width: 33%;
  height: 50vh;
  border-radius: 5px;
  background-color: #ffff;
`;

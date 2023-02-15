import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputGroup from "./InputGroup";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  emailState,
  passwordState,
  inputValueSelector,
  loginPost,
} from "../store/auth.recoil";

function Login() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const useCheck = useRecoilValue(inputValueSelector);
  const loginRequest = useRecoilValue(loginPost);

  const navigate = useNavigate();

  const goToSiginup = (e) => {
    navigate(`/Signup`);
    e.preventDefault();
  };

  return (
    <LoginForm onSubmit={loginRequest}>
      <Titie>로그인</Titie>
      <EmailWrap>
        <InputGroup
          type="email"
          placeholder="이메일"
          value={email}
          setValue={setEmail}
        />
      </EmailWrap>
      <PasswordWrap>
        <InputGroup
          type="password"
          placeholder="비밀번호"
          value={password}
          setValue={setPassword}
        />
      </PasswordWrap>
      <ButtonWrap>
        <LoginButton disabled={useCheck}>로그인</LoginButton>
        <SignupButton onClick={goToSiginup}>회원가입</SignupButton>
      </ButtonWrap>
    </LoginForm>
  );
}
export default Login;

export const LoginForm = styled.form`
  padding: 30px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
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

  /* &:disabled {
    opacity: 0.5;
  } */
  //
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

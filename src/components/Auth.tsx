import React, { useState } from "react";
import styled from "styled-components";
import InputGroup from "./InputGroup";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  emailState,
  passwordState,
  loginPost,
  signupPost,
  useCheckFuc,
} from "../store/auth.recoil";

function Login() {
  const [email, setEmail] = useRecoilState<string>(emailState);
  const [password, setPassword] = useRecoilState<string>(passwordState);
  const [isLogin, setIsLogin] = useState(true);
  const useCheck = useCheckFuc();
  const loginRequest = useRecoilValue(loginPost);
  const signupRequest = useRecoilValue(signupPost);

  const createAccountHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLogin((current) => !current);
  };

  const authRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const api = isLogin ? loginRequest : signupRequest;
    return api();
  };

  return (
    <LoginForm onSubmit={authRequest}>
      <Titie> {isLogin ? "로그인" : "회원가입"}</Titie>
      <InputWrap>
        <InputGroup
          type="email"
          placeholder="이메일"
          value={email}
          setValue={setEmail}
        />

        <InputGroup
          type="password"
          placeholder="비밀번호"
          value={password}
          setValue={setPassword}
        />
      </InputWrap>
      <ButtonWrap>
        <LoginBtn type="submit" disabled={useCheck}>
          {isLogin ? "로그인" : "회원가입"}
        </LoginBtn>
        <CreateAccountBtn onClick={createAccountHandler}>
          {isLogin ? "회원가입" : "로그인"}
        </CreateAccountBtn>
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
  margin: 20px;
  font-size: 40px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginBtn = styled.button`
  height: 35px;
  width: 70%;
  padding: 5px 36px;
  margin: 5px;
  background-color: #ff8000e3;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;
export const CreateAccountBtn = styled.button`
  margin-top: 20px;
  background: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;

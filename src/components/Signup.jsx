import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputGroup from "./InputGroup";
import { Titie, InputWrap, ButtonWrap, AuthButton } from "./Login";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  emailState,
  passwordState,
  inputValueSelector,
  signupPost,
} from "../store/auth.recoil";

function Signup() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const useCheck = useRecoilValue(inputValueSelector);
  const signupRequest = useRecoilValue(signupPost);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(`/`);
  };

  return (
    <SignupForm onSubmit={signupRequest}>
      <Titie>회원가입</Titie>
      <InputWrap>
        <InputGroup
          type="email"
          placeholder="이메일"
          value={email}
          setValue={setEmail}
        />

        <InputGroup
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          setValue={setPassword}
        />
      </InputWrap>
      <ButtonWrap>
        <AuthButton disabled={useCheck}>회원가입</AuthButton>
        <AuthButton onClick={goToLogin}>로그인</AuthButton>
      </ButtonWrap>
    </SignupForm>
  );
}
export default Signup;

const SignupForm = styled.form`
  padding: 30px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
`;

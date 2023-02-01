import React from "react";
import styled from "styled-components";
import Login from "../components/Login";
function LoginPage() {
  return (
    <LoginWrap>
      <Login />
    </LoginWrap>
  );
}
export default LoginPage;

export const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

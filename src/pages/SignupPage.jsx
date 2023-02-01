import React from "react";
import styled from "styled-components";
import Signup from "../components/Signup";
function SignupPage() {
  return (
    <SignupWrap>
      <Signup />
    </SignupWrap>
  );
}
export default SignupPage;
export const SignupWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

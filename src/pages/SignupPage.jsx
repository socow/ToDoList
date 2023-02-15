import React from "react";
import styled from "styled-components";
import Signup from "../components/Signup";
function SignupPage() {
  return (
    <SignupContainer>
      <Signup />
    </SignupContainer>
  );
}
export default SignupPage;
export const SignupContainer = styled.div`
  background-color: #ffff;
  margin: auto;
  max-width: 600px;
`;

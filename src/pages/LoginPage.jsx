import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "../components/Login";

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/todo`);
    }
  }, [navigate]);

  return (
    <LoginContainer>
      <Login />
    </LoginContainer>
  );
}
export default LoginPage;

export const LoginContainer = styled.div`
  background-color: #ffff;
  margin: auto;
  max-width: 600px;
`;

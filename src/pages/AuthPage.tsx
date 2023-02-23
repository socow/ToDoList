import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Auth from "../components/Auth";

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      alert("자동 로그인 되었습니다.");
      navigate(`/todo`);
    }
  }, [navigate]);

  return (
    <LoginContainer>
      <Auth />
    </LoginContainer>
  );
}
export default LoginPage;

export const LoginContainer = styled.div`
  background-color: #ffff;
  margin: auto;
  max-width: 600px;
`;

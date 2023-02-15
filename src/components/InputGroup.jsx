import React from "react";
import styled from "styled-components";

function InputGroup({ type = "text", placeholder = "", value, setValue }) {
  return (
    <>
      <AuthInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default InputGroup;

const AuthInput = styled.input`
  height: 30px;
  width: 70%;
`;

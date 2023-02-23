import React from "react";
import styled from "styled-components";

function InputGroup({
  type = "text",
  placeholder = "",
  value,
  setValue,
}: {
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
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
  height: 35px;
  width: 70%;
`;

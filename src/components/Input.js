import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autoComplete="off"
      />
      <Status />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 80%;
  min-width: 250px;
  max-width: 350px;
  height: 40px;
  margin: 0.5rem 0;
  border: none;
  background-color: #f5f5f5;
  box-shadow: 6px 14px 9px -15px rgba(0, 0, 0, 0.25);
  padding: 0 1rem;
  border-radius: 8px;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateX(-6px);
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #f88f01;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background: #ef4f4f;
  }

  ${'' /* ${StyledInput}:invalid + & {
    background: #ff4646;
  } */}

  ${StyledInput}:valid + & {
    background: #16c79a;
  }
`;

export default Input;

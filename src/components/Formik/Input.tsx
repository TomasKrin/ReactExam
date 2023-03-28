import { inputBackgroundColor } from "../../consts/styles";
import styled from "styled-components";

const Input = (props: any) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 5px;
  color: darkgray;
  background-color: ${inputBackgroundColor};
  border: 1px solid lightgray;
  padding: 10px 14px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

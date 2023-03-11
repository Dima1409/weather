import styled from "styled-components";

const SearchForm = styled.form`
  margin-bottom: 10px;
  background-color: teal;
  padding: 20px;
  box-shadow: 0 2px 2px #000;
`;
const InputForm = styled.input`
  padding: 10px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  border-radius: 4px;
`;
const BtnSubmit = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #28718d;
  padding: 10px;
  font-size: 18px;
  transition: all 0.3s;
  &:disabled {
    background-color: grey;
  }
  &:hover,
  &:focus {
    &:not([disabled]) {
      box-shadow: 0 0 5px #000;
      cursor: pointer;
    }
  }
`;


export { SearchForm, InputForm, BtnSubmit };

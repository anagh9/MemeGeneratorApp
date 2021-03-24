import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 0.25rem 1rem;
  border: 0;
  border-bottom: 3px solid #726a95;
  font-size: 1.5rem;
  margin: 1rem auto;
  outline: transparent;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 5px;
  outline: transparent;
  font-size: 1.5rem;
  background-color: #726a95;
  color: #351f39;
  margin: 1rem 0;
  border: 0;
  cursor: pointer;
  color: #f4e8c1;
  &:hover {
    transform: scale(1.1);
  }
`;

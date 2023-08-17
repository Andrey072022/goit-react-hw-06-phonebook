import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 400px;
  padding: 20px;
  border: 4px solid #029b20;
  border-radius: 5px;
`;
export const FormInput = styled.input`
  margin-right: 150px;
  min-width: 250px;
  border: 2px solid #029b20;
`;
export const FormButton = styled.button`
  min-width: 80px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #029b20;
  &:hover {
    color: #fff;
  }
`;

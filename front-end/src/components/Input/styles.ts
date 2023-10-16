import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  gap: 1rem;
  padding: 0 2rem;
`;

export const ContainerForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  width: 55rem;
`;

export const InputContent = styled.input`
  height: 3rem;
  width: 100%;
  color: ${({ theme }) => theme.colors['gray-100']};
  background: ${({ theme }) => theme.colors['gray-700']};
  border: 2px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: 99px;
  padding: 0 1rem;
  font-size: 1rem;

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors['gray-400']};
    color: ${({ theme }) => theme.colors['gray-300']};
  }

  &:focus {
    outline: none; 
    border: 2px solid ${({ theme }) => theme.colors['grey-500']}; 
  }
`;

export const Button = styled.button`
  width: 7rem;
  height: 3rem;
  border-radius: 7px;
  border: none;
  font-size: 1rem;

  background: rgb(25, 195, 125);
  color: ${({ theme }) => theme.colors['gray-100']};

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors['gray-300']};
  }

  &:hover {
    transition: 0.2s;
    filter: brightness(0.5);
  }
`;
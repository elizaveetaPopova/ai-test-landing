import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue110};
  color: ${({ theme }) => theme.colors.surface1};
  border: none;
  padding: 12px 24px;
  border-radius: 134px;
  cursor: pointer;
  font-size: 1.5rem;
  height: 70px;
  font-family: 'Circe Rounded', sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue100};
  }
`;

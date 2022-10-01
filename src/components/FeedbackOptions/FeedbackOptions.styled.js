import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  padding: 4px;
  border: none;
  border-radius: 10px;
  min-width: 70px;
  &:hover {
    cursor: pointer;
  }
`;

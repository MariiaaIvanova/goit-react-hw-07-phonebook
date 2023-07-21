import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  padding: 12px;
  border-radius: 4px;
  list-style: none;
  margin-right: auto;
  margin-left: auto;
`;

export const Item = styled.li`
 
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
   padding: 5px 20px;
  margin-left: 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 2px solid #342e69;

  background-color: #d4d0f5;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
  background-color: #342e69;
  color: #ffff;
  }
  cursor: pointer;
`;
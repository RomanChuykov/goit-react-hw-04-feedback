import styled from "styled-components";

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ButtonItem = styled.li`
  :hover:nth-of-type(1) button {
    background-color: rgba(96, 205, 74, 0.7);;
  }

  :hover:nth-of-type(2) button {
    background-color:  rgba(205, 185, 74, 0.7);
  }

  :hover:nth-of-type(3) button {
    background-color:  rgba(205, 87, 74, 0.7);
  }
`;

export const Button = styled.button`
  padding: 5px 25px;

  font-size: 24px;
  color: #282828;

  background-color: transparent;

  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);

  transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  cursor: pointer;

  
`;
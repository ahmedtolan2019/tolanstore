import styled from "styled-components";
import { cssColors } from "../../styles.constants";

export const Container = styled.div`
  border: 1px solid;
  background-color: ${cssColors.mainLight};
  display: flex;
  justify-content: space-evenly;
  padding: 0px 10px 0px 10px;
  height: 35px;
  border-radius: 17px;
  overflow: hidden;
`;
export const Input = styled.input`
  background-color: ${cssColors.mainLight};
  outline: none;
  border: none;
  width: 90%;
  padding: 0px 15px 0px 15px;
  color: ${cssColors.secondary};
`;
export const IconContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;

  svg {
    width: 25px;
  }
  .a {
    stroke-width: 1px;
  }
`;

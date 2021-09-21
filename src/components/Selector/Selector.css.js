import styled from "styled-components";
import { cssColors, cssFontsWeights } from "../../styles.constants";

export const Container = styled.div`
  margin-top: 2vh;

  width: 100%;
  display: flex;

  flex-direction: column;
`;
export const List = styled.ul`
  overflow-y: scroll;
  /* border: 1px solid; */
  max-height: 30vh;
  padding-right: 0px;
  scroll-behavior: smooth;

  a {
    color: ${cssColors.mainLight};
  }

  &::-webkit-scrollbar {
    width: 8px;

    &-track {
      background: ${cssColors.darkWhite};
      border-radius: 8px;
    }
    &-thumb {
      border-radius: 8px;
      background: ${cssColors.shadow};
    }
  }

  .active {
    background-color: ${cssColors.shadow};
    border-left: 5px solid ${cssColors.secondary};
    border-radius: 0px 17px 17px 0px;
  }
`;
export const ListItem = styled.li`
  font-size: 16px;
  padding: 0px 5px 0px 5px;
  font-weight: ${cssFontsWeights.medium};
  height: 40px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: ${cssColors.shadow};
    border-left: 5px solid ${cssColors.secondary};
    border-radius: 0px 17px 17px 0px;
  }
`;
export const IconContainer = styled.div`
  margin-top: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .a {
    stroke-width: 2px;
  }
  svg {
    cursor: pointer;
  }
`;

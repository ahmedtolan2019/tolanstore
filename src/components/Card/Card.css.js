import styled, { css } from "styled-components";
import { cssColors, cssFontsWeights, mobile } from "../../styles.constants";
// import SavedLists from "./../SavedLists/SavedLists";
export const Container = styled.div`
  padding-bottom: 8px;
  overflow: hidden;
  max-width: 280px;
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 17px;
  box-shadow: 0px 0px 12px #33475626;
  height: fit-content;
  margin-bottom: 25px;

  &:first-child {
    margin-left: 0px;
  }
  ${mobile(css`
    max-width: 100%;
    max-height: auto;
    margin-left: 0px;
  `)}
`;

export const ImgContainer = styled.div`
  position: relative;
  img {
    ${mobile(css`
      width: 100%;
    `)}
    padding: 0px;
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
`;
export const ContentContainer = styled.div`
  padding: 0px 25px 0px 25px;
  margin-bottom: 10px;
  display: flex;
  overflow: hidden;
  max-height: 150px;

  flex-direction: column;
  p:first-child {
    font-size: 20px;
    font-weight: ${cssFontsWeights.regular};
    margin-bottom: 0px;
  }
  p:nth-child(2) {
    font-size: 24px;
    font-weight: ${cssFontsWeights.regular};
    word-wrap: wrap;
    margin-bottom: 0px;
  }
  article {
    font-size: 12px;
    font-weight: ${cssFontsWeights.light};
  }
`;
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const SaveIcon = styled.i`
  color: ${cssColors.blue};
  font-size: 26px;
  cursor: pointer;
`;
export const FavIcon = styled.i`
  color: ${cssColors.secondary};
  font-size: 26px;
  cursor: pointer;
`;

import styled, { css } from "styled-components";
import { cssColors, cssFontsWeights, mobile } from "../../styles.constants";

export const Container = styled.div.attrs({
  className: "col-12 col-md-3 col-lg-2 px-4 py-5",
})`
  position: sticky;
  top: 0px;
  height: 100vh;
  z-index: 100;
  color: ${cssColors.mainLight};
  background-color: ${cssColors.mainDark};
  transition: all 0.6s ease;
  ${mobile(css`
    z-index: 4;
    position: fixed;
    top: 0px;
    left: ${(props) => (props.show ? "0" : "-100%")};
    height: 100vh;
    bottom: 0px;
  `)}
`;
export const Wrapper = styled.div.attrs({
  className: "row",
})``;
export const ButtonsContainer = styled.div`
  margin-top: 70px;
  height: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${mobile(css`
    margin-top: 35px;
  `)}
`;
export const Title = styled.h2`
  margin-top: 12vh;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: ${cssFontsWeights.semiBold};
`;

export const CloseContainer = styled.div`
  font-size: 32px;
  display: none;

  span {
    font-weight: ${cssFontsWeights.light};
  }
  ${mobile(css`
    display: flex;
    justify-content: flex-end;
  `)}
`;

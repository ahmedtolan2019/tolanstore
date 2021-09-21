import styled, { css } from "styled-components";
import { cssColors, mobile } from "../../styles.constants";

export const Container = styled.div.attrs({
  className: "col-12 col-md-12 col-lg-10",
})`
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${cssColors.darkWhite};
  ${mobile(css``)};
  a {
    text-decoration: none;
  }
`;
export const Wrapper = styled.div.attrs({
  className: "row py-2 flex-fil align-items-center",
})`
  ${mobile(css``)}
`;
export const ContentWrapper = styled.div.attrs({
  className: "col-12 align-items-center gap-2 gap-md-4",
})`
  display: flex;

  ${mobile(css``)}
`;

export const IconContainer = styled.div``;
export const Icon = styled.i`
  font-size: 24px;
  cursor: pointer;
  color: ${cssColors.secondary};
`;

export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const CircleWrapper = styled.div``;
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 30px;
  background-color: ${cssColors.gray};
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
`;
export const Dot = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${cssColors.gray};
  border-radius: 50%;
`;

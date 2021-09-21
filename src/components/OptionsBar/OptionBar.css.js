import styled, { css } from "styled-components";
import { cssColors, cssFontsWeights, mobile } from "../../styles.constants";

export const Container = styled.div.attrs({
  className: "col-12 pt-4 pb-2",
})`
  position: sticky;
  top: 46px;
  z-index: 1;
  ${mobile(css``)}

  background-color: #fff;
`;

export const Wrapper = styled.div.attrs({
  className: "row  px-3",
})`
  ${mobile(css``)}
`;

export const IconContainer = styled.div.attrs({
  className: "col-auto d-flex align-items-center",
})`
  ${mobile(css``)}
`;
export const OptionsContainer = styled.div``;

export const Option = styled.p`
  background: ${cssColors.gray};
  font-size: 14px;
  color: ${cssColors.darkWhite};
  font-weight: ${cssFontsWeights.medium};

  border-radius: 20px;
`;

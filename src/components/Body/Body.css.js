import styled, { css } from "styled-components";
import { mobile } from "../../styles.constants";

export const Container = styled.div.attrs({
  className: "col-12 col-md-9 col-lg-10",
})`
  ${mobile(css``)}
  padding-bottom:60px
`;
export const Wrapper = styled.div.attrs({
  className: "row",
})`
  ${mobile(css``)}
`;

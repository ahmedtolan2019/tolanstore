import styled, { css } from "styled-components";
import { mobile } from "../../styles.constants";

export const Container = styled.div.attrs({
  className: "col-12 ps-md-4",
})``;
export const Wrapper = styled.div.attrs({
  className: "row flex-fill",
})``;
export const Scroll = styled.div.attrs({
  className: "col-12 py-2",
})`
  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${mobile(css`
    padding-right: 30px;
    padding-left: 30px;
  `)}
  &::-webkit-scrollbar {
    width: 8px;
    display: none;

    &-track {
      background: rgba(255, 255, 255, 0);
      border-radius: 8px;
    }
    &-thumb {
      border-radius: 8px;
      background: rgba(51, 51, 51, 0);
    }
  }
`;

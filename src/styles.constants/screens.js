import { css } from "styled-components";

export const mobile = (mobileCss) => {
  return css`
    @media (max-width: 768px) {
      ${mobileCss}
    }
  `;
};

import styled from "styled-components";
import { cssColors, cssFontsWeights } from "./styles.constants";

const { mainDark, mainLight, secondary, darkWhite } = cssColors;
const { light, regular, semiBold, bold } = cssFontsWeights;

export const StyledButton = styled.button`
  background-color: ${secondary};
  font-size: 18px;
  color: white;
  outline: none;
  border: none;
  font-weight: ${semiBold};
  border-radius: 5px;
`;

export const Sidebar = styled.aside`
  height: 100vh;
  background-color: ${mainDark};
  padding: 20px;
  min-width: 300px;
`;
export const Body = styled.main`
  height: 100vh;
  background-color: ${mainLight};
  div {
    p {
      font-size: 12px;
      font-weight: ${light};
    }
  }
`;
export const Header = styled.header`
  background-color: ${darkWhite};
  font-size: 24px;
  font-weight: ${bold};
`;

import styled from "styled-components";
import { cssColors, cssFontsWeights } from "../../styles.constants";

const sideBtn = `
  width: 220px;
  height: 40px; 
  
  box-shadow: 0px 0px 6px ${cssColors.shadow};
  border-radius: 40px;
`;

const grayBtn = `
background:${cssColors.mainDark};
${sideBtn}
`;
const redBtn = `
background: ${cssColors.secondary};
${sideBtn}
`;

const cartBtn = `
background-color: ${cssColors.green};
width: 100px;
border-radius: 26px;
height: 26px;
font-size: 12px;
font-weight: ${cssFontsWeights.semiBold};
`;

const RedBtnNoShadow = `
${redBtn}
box-shadow: none;
width:130px;
height:35px;
margin-top: 8px;



`;
export const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${cssColors.mainLight};
  font-size: 16px;
  font-weight: ${cssFontsWeights.regular};
  ${(props) => props.theme === "gray" && grayBtn}
  ${(props) => props.theme === "red-noShadow" && RedBtnNoShadow}
  ${(props) => props.theme === "red" && redBtn}
  ${(props) => props.theme === "green" && cartBtn}
`;

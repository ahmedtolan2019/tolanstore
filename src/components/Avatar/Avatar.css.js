import styled from "styled-components";
import { cssColors, cssFontsWeights } from "../../styles.constants";

export const Container = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
`;
export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${cssColors.mainLight};
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const UserName = styled.h4`
  font-weight: ${cssFontsWeights.medium};
  font-size: 20px;
`;
export const Role = styled.span`
  font-weight: ${cssFontsWeights.light};
  font-size: 12px;
`;

import styled, { css } from "styled-components";
import { cssColors, cssFontsWeights, mobile } from "../../styles.constants";

export const Container = styled.div.attrs({
  className: "col-12 col-sm-12 col-md-12",
})`
  position: sticky;
  top: 0px;
  z-index: 2;
  height: auto;
  background-color: ${cssColors.darkWhite};

  ${mobile(css``)}
`;
export const Wrapper = styled.div.attrs({
  className: "row align-items-center py-2 py-md-2 px-md-4",
})`
  justify-content: space-between;
`;
export const CartContainer = styled.div.attrs({
  className: "d-inline-flex justify-content-center align-items-center",
})`
  ${mobile(css``)}
`;
export const CartIcon = styled.i`
  cursor: pointer;
  font-size: 26px;

  color: ${cssColors.secondary};

  ${mobile(css``)}
`;
export const ListsIcon = styled.i`
  cursor: pointer;

  cursor: pointer;
  font-size: 22px;

  color: ${cssColors.secondary};

  ${mobile(css``)}
`;
export const ListsContainer = styled.div.attrs({
  className: "d-inline-flex justify-content-center align-items-center",
})`
  ${mobile(css``)}
`;
export const TitleContainer = styled.h2.attrs({
  className: "mt-2 ",
})`
  font-size: 24px;

  font-weight: ${cssFontsWeights.semiBold};
  ${mobile(css`
    font-size: 20px;
  `)}
`;
export const SearchbarContainer = styled.div.attrs({
  className: "flex-md-fill px-5 ",
})`
  ${mobile(css`
    display: none;
  `)}

  div {
    background: #fff;
    border: none;
    &:last-child {
    }

    input {
      background: #fff;
    }
  }
`;
export const ContentContainer = styled.div.attrs({
  className: "ms-2 py-0",
})`
  line-height: 0px;

  h2 {
    font-size: 16px;
    font-weight: ${cssFontsWeights.regular};
    span {
      font-size: 14px;
      font-weight: ${cssFontsWeights.light};
    }
  }
  small {
    font-size: 10px;
    font-weight: ${cssFontsWeights.light};
  }
  ${mobile(css`
    display: none;
  `)}
`;
export const CategoryHambContainer = styled.div`
  display: none;
  cursor: pointer;
  height: 26px;
  ${mobile(css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `)}
`;
export const HambLine = styled.span`
  height: 4px;
  width: 90%;
  border-radius: 4px;
  background-color: ${cssColors.secondary};
`;

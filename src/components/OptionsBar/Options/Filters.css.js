import styled from "styled-components";

import { cssColors, cssFontsWeights } from "../../../styles.constants";

//styled compnent
export const FilterIcon = styled.i`
  font-size: 24px;
  color: ${cssColors.secondary};
  cursor: pointer;
`;

export const Container = styled.div.attrs({
  className: "d-flex align-items-center justify-content-center",
})`
  position: relative;
`;
export const Wrapper = styled.div.attrs({ className: "pb-2" })``;

//filters box
export const FiltersContainer = styled.div.attrs({
  className: "d-flex  align-items-center justify-content-center shadow me-4",
})`
  background-color: ${cssColors.listItems};
  position: fixed;
  overflow: hidden;

  border: 0.1px solid rgba(9, 12, 29, 0.1);
  color: ${cssColors.mainLight};
  border-radius: 8px;
  font-size: 18px;
  transform: translatey(-400px);
  opacity: 0;
  transition: all 0.2s ease;

  &.active {
    opacity: 1;
    transform: translatey(0px);
  }
`;
export const FiltersWrapper = styled.div.attrs({
  className: "d-flex gap-3 px-3 py-3",
})``;
export const SortContainer = styled.div.attrs({ className: "" })`
  border-radius: 10px;
  background: ${cssColors.mainDark};
`;
export const SortSelectorWrapper = styled.div.attrs({ className: "py-3 pe-3" })`
  h5 {
    padding-left: 14px;
    font-weight: ${cssFontsWeights.light};
    span {
      font-weight: ${cssFontsWeights.bold};
    }
  }
`;
export const SortSelector = styled.div.attrs({ className: "mt-3" })`
  label {
    width: 80px;
    padding: 4px 10px 4px 10px;
    margin-bottom: 4px;
    border-left: 4px solid transparent;
    background-color: transparent;
    border-radius: 0px 18px 18px 0px;
    transition: border 0.3s ease, background-color 0.2s ease;
    color: ${cssColors.mainLight};
  }
`;
export const SortKey = styled.input.attrs({ className: "", type: "radio" })`
  border: 1px solid black;
  border: none;
  outline: none;
  display: none;
  color: ${cssColors.mainLight};
  &:hover + label {
    color: ${cssColors.mainLight};
    border-left: 4px solid ${cssColors.secondary};
    background-color: ${cssColors.shadow};
  }
  &:checked + label {
    color: ${cssColors.mainLight};
    border-left: 4px solid ${cssColors.secondary};
    background-color: ${cssColors.shadow};
  }
`;

//price container
export const PriceContainer = styled.div.attrs({ className: "col-12" })`
  border-radius: 10px;
  background: ${cssColors.mainDark};
`;

export const PriceRangeWrapper = styled.div.attrs({ className: "p-3" })`
  h5 {
    font-weight: ${cssFontsWeights.light};
    span {
      font-weight: ${cssFontsWeights.bold};
    }
  }
`;
export const PriceSliderAllContainer = styled.div.attrs({ className: "" })``;
export const PriceSliderContainer = styled.div.attrs({ className: "" })`
  position: relative;
  input {
    outline: none;
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 10px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: ${cssColors.secondary};
      width: 16px;
      height: 16px;
      border-radius: 50%;

      cursor: pointer;
    }
  }
`;
export const PriceSlider = styled.div.attrs({ className: "" })``;

export const PriceSliderContentContainer = styled.div.attrs({
  className: "d-flex justify-content-between pt-1",
})``;

//page size container
export const PageSizeContainer = styled.div.attrs({ className: "col-12" })`
  border-radius: 10px;
  background: ${cssColors.mainDark};
`;
export const PageSizeWrapper = styled.div.attrs({ className: "p-3" })`
  h5 {
    font-weight: ${cssFontsWeights.light};
    span {
      font-weight: ${cssFontsWeights.bold};
    }
  }
`;

export const PageSizeSelector = styled.div.attrs({
  className: "d-flex gap-1 justify-content-between",
})`
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: ${cssColors.mainDark};
    border-radius: 50%;
    background: ${cssColors.mainLight};

    transition: color 0.3s ease, background-color 0.3s ease;
  }
`;
export const PageSize = styled.input.attrs({ className: "", type: "radio" })`
  display: none;
  &:checked + label {
    color: ${cssColors.mainLight};

    background: ${cssColors.secondary};
  }
`;

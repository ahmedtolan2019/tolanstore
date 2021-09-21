import styled from "styled-components";
import { cssColors } from "./../../styles.constants/colors";
import { cssFontsWeights } from "./../../styles.constants/fonts";

export const Container = styled.div.attrs({
  className: "col-12",
})``;
export const Wrapper = styled.div.attrs({
  className: "py-2 px-2",
})`
  width: 100%;
`;
export const FormWrapper = styled.div.attrs({
  className: "p-1",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ActionsWrapper = styled.div.attrs({
  className: "my-4 px-1",
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const FormControlWrapper = styled.div.attrs({
  className: "my-2",
})`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ControlWrapper = styled.div.attrs({
  className: "",
})`
  width: 100%;
`;
export const ErrorsWrapper = styled.div.attrs({
  className: "w-100",
})``;
export const Control = styled.input.attrs((props) => ({
  className: `w-100 px-4 shadow-sm ${
    props.as === "textarea" ? "py-2 rounded position-relative" : ""
  }  `,
}))`
  appearance: none;
  border: unset;
  border: 0.2px solid rgba(6, 2, 17, 0.1);
  min-height: 46px;
  border-radius: 36px;
  outline: unset;
  &:focus {
    border: unset;
    outline: unset;
  }
`;
export const Label = styled.label.attrs({
  className: "d-none",
})``;
export const Erorr = styled.small.attrs({
  className: "d-block rounded mt-2 p-1 px-3 small   rounded-pill w-100",
})`
  border: 0.8px solid rgb(246, 142, 142);
  background-color: #ff000016;
  color: rgba(255, 0, 0, 0.897);
  font-size: 10px;
`;
export const FormAction = styled.button.attrs({
  className: "fs-5",
})`
  color: ${cssColors.darkWhite};
  outline: unset;
  border: unset;
  border-radius: 50px;
  width: 45%;
  font-weight: ${cssFontsWeights.medium};
`;
export const SaveAction = styled(FormAction).attrs({
  className: "",
})`
  background-color: ${cssColors.greenLight};
`;
export const CancelAction = styled(FormAction).attrs({
  className: "",
})`
  background-color: ${cssColors.secondary};
`;

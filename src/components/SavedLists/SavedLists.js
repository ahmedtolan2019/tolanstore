import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { cssColors, cssFontsWeights, mobile } from "../../styles.constants";
import { StyledButton } from "../Button/Button.css";

import SavedListItem from "./SavedListItem";

const slideintopForm = keyframes`
  0% {
    height:0px;
    
  }
  100% {
    
    height: 140px;
  }

`;
const Container = styled.div`
  border: 1px solid rgba(51, 51, 51, 0.2);
  /* min-height: 350px; */
  /* min-height: 350px; */
  width: 15vw;
  transition: all 0.2s ease;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;

  border-radius: 12px;
  background: ${cssColors.darkWhite};
  color: ${cssColors.textDark};
  position: fixed;
  top: 0px;

  right: ${(props) => (props.show ? "0px" : "-100%")};

  box-shadow: 0px 6px 12px #08203229;
  z-index: 2;

  ${mobile(css`
    width: 100vw;
  `)}
`;
const Wrapper = styled.div`
  padding: 12px;
  padding-top: 16px;
  padding-bottom: 20px;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-${(props) => props.dir};
  line-height: 18px;
`;
const AddActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-${(props) => props.dir};
  line-height: 18px;
`;
const AddIcon = styled.i`
  font-size: 30px;
  cursor: pointer;
  &:last-child {
    margin-left: 15px;
  }
  ${mobile(css`
    font-size: 24px;
  `)}
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: ${cssFontsWeights.light};
`;
const Text = styled.span`
  font-size: 18px;
  font-weight: ${cssFontsWeights.semiBold};
`;
const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const ListsWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 186px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const IconWrapper = styled.div`
  margin-top: 10px;
`;
const Icon = styled.i`
  font-size: 36px;
  color: ${cssColors.textDark};
  cursor: pointer;
`;

const AddFormWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideintopForm} 0.2s both;
`;
const InputWrapper = styled.div`
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  outline: none;
  border: none;
  height: 44px;
  border-radius: 7px;
  color: ${cssColors.gray};
  background-color: #fff;
  padding: 14px;
  box-shadow: 0px 0px 16px rgba(8, 32, 50, 0.11);
  ${mobile(css`
    width: 100%;
  `)}
`;

const ColorsSelectorWrapper = styled.div`
  display: flex;
  margin-top: 14px;
  width: 100%;
  justify-content: space-around;
`;
const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: ${(props) =>
    props.selected &&
    `2px solid #fff ;box-shadow: 0px 0px 12px rgba(0, 60, 75, 0.3);`};
`;

const SmGreenBtn = styled(StyledButton)`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  border-radius: 35px;
  font-size: 16px;
`;

class SavedLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      formData: {
        name: "",

        selectedColor: 0,
      },
      lists: [
        { id: 1, name: "Favourites", color: cssColors.secondary },
        { id: 2, name: "Wish", color: cssColors.magenta },
        { id: 3, name: "30 Years Old", color: cssColors.greenLight },
      ],
    };
    this.inputRef = React.createRef();

    this.circleColors = [
      { id: 0, color: cssColors.blue },
      { id: 1, color: cssColors.greenLight },
      { id: 2, color: cssColors.green },
      { id: 3, color: cssColors.magenta },
      { id: 4, color: cssColors.secondary },
      { id: 5, color: cssColors.gray },
      { id: 6, color: cssColors.textDark },
    ];
  }

  handelShowAddForm = () => {
    this.setState({ showForm: !this.state.showForm }, () => {
      if (this.inputRef.current != null) {
        this.inputRef.current.focus();
      }
    });
  };
  handleCahnge = (e) => {
    this.setState((state) => {
      state.formData.name = e.target.value;
      return state;
    });
  };

  handleColorChange = (id) => {
    this.setState(
      (state) => {
        state.formData.selectedColor = id;
        return state;
      },
      () => {
        if (this.inputRef.current != null) {
          this.inputRef.current.focus();
        }
      }
    );
  };

  saveCallback = () => {
    let list = {
      name: this.state.formData.name,
      color: this.circleColors.find(
        (color) => color.id === this.state.formData.selectedColor
      ).color,
    };
    this.setState(
      (state) => {
        state.formData.selectedColor = 0;
        state.formData.name = "";
        return state;
      },
      () => {
        this.props.addList(list);
        if (this.inputRef.current != null) {
          this.inputRef.current.focus();
        }
      }
    );
  };
  render() {
    return (
      <Container show={this.props.show}>
        <Wrapper>
          <ContentWrapper>
            <TextWrapper dir="start">
              <SmallText>Your</SmallText>
              <Text>Lists</Text>
            </TextWrapper>
            <AddActionWrapper dir="center">
              <AddIcon
                onClick={this.handelShowAddForm}
                className=" icon-add-green "
              />
              <AddIcon
                onClick={this.props.handleShow}
                className="far fa-times-circle fs-2 text-danger"
              />
            </AddActionWrapper>
          </ContentWrapper>

          <ScrollWrapper>
            <ListsWrapper id="list-scroll-box">
              {this.props.lists.length !== 0 ? (
                this.props.lists.map((item) => (
                  <SavedListItem
                    key={item.list.id}
                    name={item.list.name}
                    color={item.list.color}
                    items={item.quantity}
                    handleClick={() =>
                      this.props.addToList(item.list, this.props.product)
                    }
                  />
                ))
              ) : (
                <h2> There is no Lists</h2>
              )}
            </ListsWrapper>
            <IconWrapper>
              <Icon id="list-scroll-btn" className="icon-down-open" />
            </IconWrapper>
          </ScrollWrapper>

          {this.state.showForm && (
            <AddFormWrapper>
              <InputWrapper>
                <Input
                  ref={this.inputRef}
                  value={this.state.formData.name}
                  placeholder="Enter list name"
                  onChange={this.handleCahnge}
                />
              </InputWrapper>
              <ColorsSelectorWrapper>
                {this.circleColors.map((color) => (
                  <ColorCircle
                    key={color.id}
                    selected={this.state.formData.selectedColor === color.id}
                    onClick={() => this.handleColorChange(color.id)}
                    color={color.color}
                  />
                ))}
              </ColorsSelectorWrapper>
              <SmGreenBtn onClick={this.saveCallback} theme="green">
                Add List
              </SmGreenBtn>
            </AddFormWrapper>
          )}
        </Wrapper>
      </Container>
    );
  }

  clickEventHandler = () => {
    document.getElementById("list-scroll-box").scrollTop += 186;
  };
  componentDidMount() {
    document
      .getElementById("list-scroll-btn")
      .addEventListener("click", this.clickEventHandler);
  }
  componentWillUnmount() {
    document
      .getElementById("list-scroll-btn")
      .removeEventListener("click", this.clickEventHandler);
  }
}

export default SavedLists;

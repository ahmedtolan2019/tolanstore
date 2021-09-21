import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { cssColors, cssFontsWeights, mobile } from "../../styles.constants";
// import { StyledButton } from "../Button/Button.css";

import SavedListItem from "./SavedListItem";

const slideintop = keyframes`
  0% {
    
    width:0px;
    
    
  }
  100% {
    width: 230px;
    
  }

`;

const Container = styled.div`
  width: 230px;
  min-height: 350px;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;

  border-radius: 12px;
  background: ${cssColors.darkWhite};
  color: ${cssColors.textDark};

  box-shadow: 0px 6px 12px #08203229;
  z-index: 2;
  animation: ${slideintop} 0.3s ease;
  ${mobile(css`
    width: 300px;
    right: 80px;
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

class SavedListsCard extends Component {
  handleAddToList = (list, product) => {
    // console.log("handlleadd");
    this.props.addToList(list, product);
  };
  handleClose = () => {
    this.props.handleClose();
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
            <i
              onClick={this.handleClose}
              className="far fa-times-circle fs-2 text-danger"
            ></i>
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
                    card
                    handleClick={this.handleAddToList}
                    list={item.list}
                    product={this.props.product}
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

export default SavedListsCard;

import React, { Component } from "react";
import styled from "styled-components";
import { cssColors, cssFontsWeights } from "../../styles.constants";

const Container = styled.div`
  background-color: ${cssColors.listItems};
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 18px;
  margin-left: 10px;
`;
const Name = styled.span`
  font-size: 12px;
  font-weight: ${cssFontsWeights.medium};
`;
const Items = styled.span`
  font-size: 10px;
  font-weight: ${cssFontsWeights.light};
`;
const Price = styled.span`
  font-size: 12px;
  font-weight: ${cssFontsWeights.regular};
`;
const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Action = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(8, 32, 50, 0.1);
  border-radius: 4px;
  cursor: pointer;
`;
const IconAction = styled.span`
  font-size: 20px;
  font-weight: ${cssFontsWeights.medium};
`;
const Number = styled.span`
  margin: 0px 8px 0px 8px;
  text-align: center;
`;

export default class CartList extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ProductInfoWrapper>
            <ImageWrapper>
              <Image src={this.props.image} />
            </ImageWrapper>
            <TextWrapper>
              <Name>{this.props.name}</Name>
              <Items>Items ({this.props.items})</Items>
              <Price>${this.props.price}</Price>
            </TextWrapper>
          </ProductInfoWrapper>
          <ActionsWrapper>
            <Action onClick={this.props.handleDecrease}>
              <IconAction>-</IconAction>
            </Action>
            <Number>{this.props.items}</Number>
            <Action onClick={this.props.handleIncrease}>
              <IconAction>+</IconAction>
            </Action>
          </ActionsWrapper>
        </Wrapper>
      </Container>
    );
  }
}

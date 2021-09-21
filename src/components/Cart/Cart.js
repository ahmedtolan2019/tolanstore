import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { cssColors, cssFontsWeights, mobile } from "../../styles.constants";
import Button from "../Button/Button";
import { StyledButton } from "../Button/Button.css";
import CartListItem from "./CartListItem";

const slideintop = keyframes`
  0% {
    height:200px;
    width:0px;
  }
  100% {
    width: 350px;
    height: 508px;
  }

`;

const Container = styled.div`
  transition: all 0.2s ease;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  width: 350px;
  border-radius: 12px;
  background: ${cssColors.darkWhite};
  color: ${cssColors.textDark};
  position: fixed;

  top: ${(props) => (props.show ? "0px" : "-200%")};
  right: 0px;
  box-shadow: 0px 6px 12px #08203229;
  height: 0px;

  animation: ${slideintop} 0.3s ease;
  height: auto;
  ${mobile(css`
    width: 100vw;
    right: 0px;
    margin: auto;
    animation: ${slideintop} 0.2s ease;
  `)}
`;

const Wrapper = styled.div`
  padding: 12px;
  padding-top: 16px;
  padding-bottom: 30px;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const ProductsWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 286px;
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

const ActionWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LgGreenBtn = styled(StyledButton)`
  width: 130px;
  height: 35px;
  border-radius: 35px;
  font-size: 16px;
`;

const CheckoutIcon = styled.i`
  margin-right: 2px;
`;

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloading: true,
    };
  }

  render() {
    return (
      <Container show={this.props.show}>
        {this.state.isloading && <span>loading...</span>}
        {!this.state.isloading && (
          <Wrapper>
            <ContentWrapper>
              <TextWrapper dir="start">
                <SmallText>Your</SmallText>
                <Text>Cart</Text>
              </TextWrapper>
              <i
                onClick={this.props.handleShow}
                className="far fa-times-circle fs-2 text-danger ms-3 btn"
              />
              <TextWrapper dir="end">
                <SmallText>
                  Total ({this.props.cartItems ? this.props.cartItems : 0})
                </SmallText>
                <Text>${this.props.cartPrice ? this.props.cartPrice : 0}</Text>
              </TextWrapper>
            </ContentWrapper>

            <ScrollWrapper>
              <ProductsWrapper id="cart-scroll-box">
                {this.props.cart
                  ? this.props.cart.map((item) => {
                      return (
                        <CartListItem
                          key={item.product.id}
                          name={item.product.name}
                          items={item.quantity}
                          image={`${process.env.PUBLIC_URL}/${item.product.img}`}
                          price={item.product.price}
                          handleIncrease={() =>
                            this.props.updateCartQuantity(
                              item.product,
                              item.quantity + 1
                            )
                          }
                          handleDecrease={() =>
                            item.quantity > 1
                              ? this.props.updateCartQuantity(
                                  item.product,
                                  item.quantity - 1
                                )
                              : this.props.removeFromCart(item.product)
                          }
                        />
                      );
                    })
                  : "Your Cart is empty"}
              </ProductsWrapper>
              <IconWrapper>
                <Icon id="cart-scroll-btn" className="icon-down-open" />
              </IconWrapper>
            </ScrollWrapper>
            <ActionWrapper>
              <Link to="/shop/checkout">
                {" "}
                <LgGreenBtn theme="green">
                  <CheckoutIcon className="icon-Icon-material-payment" />{" "}
                  Checkout
                </LgGreenBtn>
              </Link>
              <Button
                handleClick={() => {
                  this.props.clearCart();
                }}
                theme="red-noShadow"
              >
                <CheckoutIcon className="icon-Icon-material-delete" /> ClearAll
              </Button>
            </ActionWrapper>
          </Wrapper>
        )}
      </Container>
    );
  }

  clickEventHandler = () => {
    document.getElementById("cart-scroll-box").scrollTop += 286;
  };

  componentDidMount() {
    this.setState({ isloading: false }, () => {
      document
        .getElementById("cart-scroll-btn")
        .addEventListener("click", this.clickEventHandler);
    });
  }
  componentWillUnmount() {
    this.setState({ isloading: true }, () => {
      document
        .getElementById("cart-scroll-btn")
        .removeEventListener("click", this.clickEventHandler);
    });
  }
}

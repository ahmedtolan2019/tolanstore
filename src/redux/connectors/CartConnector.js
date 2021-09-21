import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../../components/Cart/Cart";
import {
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "./../ActionCreators";

const mapStateToProps = (dataStore) => ({
  cart: dataStore.cart,
  cartItems: dataStore.cartItems,
  cartPrice: dataStore.cartPrice,
});

const mapDispatchToProps = {
  updateCartQuantity,
  removeFromCart,
  clearCart,
};

export const CartConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return <Cart {...this.props} />;
    }
  }
);

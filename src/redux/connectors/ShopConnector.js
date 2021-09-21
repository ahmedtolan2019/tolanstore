import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { DataGetter } from "../../Api/REST/DataGetter";
import Form from "../../components/Form/Form";
import TopNav from "../../components/TopNav/TopNav";
import Shop from "../../routes/Shop/Shop";
import { DataTypes } from "../Types";
import Thanks from "./../../components/Thanks/Thanks";
import {
  loadData,
  addToCart,
  addToList,
  setSortProperty,
  setPageSize,
  filterPrice,
  placeOrder,
  clearCart,
} from "./../ActionCreators";
let formControls = [
  {
    as: "input",
    type: "text",
    name: "name",
    label: "input",
    placeHolder: "Enter your name",
    rules: { required: true, minLength: 3, alpha: true },
    focus: true,
  },
  {
    as: "input",
    type: "email",
    name: "email",
    label: "input",
    placeHolder: "Enter your email",
    rules: { required: true, email: true },
  },
  {
    as: "input",
    type: "text",
    name: "address",
    label: "address",
    placeHolder: "Enter your address",
    rules: { required: true },
  },
  {
    as: "input",
    type: "text",
    name: "phone",
    label: "phone",
    placeHolder: "Enter your phone",
    rules: { required: true },
  },
  {
    as: "input",
    type: "text",
    name: "visa",
    label: "visa card",
    placeHolder: "Enter your visa card",
    rules: { required: true },
  },
];

const mapStateToProps = (dataStore) => ({ ...dataStore });

const mapDispatchToProps = {
  loadData,
  addToCart,
  addToList,
  setPageSize,
  setSortProperty,
  filterPrice,
  placeOrder,
  clearCart,
};

// filter products
// const filterProducts = (products = [], category) => {
//   return !category || category === "all"
//     ? products
//     : products.filter(
//         (p) => p.category.toLowerCase() === category.toLowerCase()
//       );
// };

export const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Redirect
            from="/shop/products/:category"
            to="/shop/products/:category/1"
            exact={true}
          />
          <Route
            path="/shop/products/:category/:page"
            render={(routeProps) => (
              <DataGetter {...this.props} {...routeProps}>
                <Shop {...this.props} {...routeProps} />
              </DataGetter>
            )}
          />
          <Route
            path="/shop/checkout"
            exact={true}
            render={(routeProps) => (
              <>
                {" "}
                <TopNav
                  {...routeProps}
                  {...this.props}
                  toggleSidebarCallback={this.toggleSidebar}
                  {...this.props}
                  navTitle="checkout"
                />
                {console.log(this.props.order)}
                <Form
                  {...routeProps}
                  {...this.props}
                  formControls={formControls}
                  cancelCallback={() =>
                    routeProps.history.push("/shop/products")
                  }
                />
              </>
            )}
          />
          <Route
            path="/shop/checkout/ordercomplete"
            render={(routeProps) => (
              <>
                <Thanks
                  cartItems={this.props.cartItems}
                  cartPrice={this.props.cartPrice}
                  order={this.props.order}
                  handleClick={() => routeProps.history.push("/shop/products")}
                />
              </>
            )}
          />
          <Redirect to="/shop/products/all/1" />
        </Switch>
      );
    }
    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      // this.props.loadData(DataTypes.PRODUCTS);
    }
  }
);

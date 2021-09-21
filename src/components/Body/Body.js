import React, { Component } from "react";
import OptionBar from "../OptionsBar/OptionBar";
import TopNav from "../TopNav/TopNav";
import { Container, Wrapper } from "./Body.css";

import ScrollableCards from "../Card/ScrollableCards";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import { Route } from "react-router";

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
];
class Body extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <TopNav
            {...this.props}
            navTitle={this.props.navTitle}
            toggleSidebarCallback={this.props.toggleSidebarCallback}
          />

          <OptionBar {...this.props} />

          <ScrollableCards {...this.props} />
          <Footer {...this.props} />
          <Route path="/shop/cart/checkout" render={() => <Form />} />
          {/* <Form /> */}
        </Wrapper>
      </Container>
    );
  }
}

export default Body;

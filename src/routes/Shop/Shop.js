import React, { Component } from "react";
// import styled, { css } from "styled-components";
import { Sidebar, Body } from "../../components";
// import { mobile } from "../../styles.constants";

// const ShopContainer = styled.div`
//   overflow: hidden;
//   display: block;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   bottom: 0px;
//   right: 0px;
//   ${mobile(css`
//     overflow: hidden;
//     display: block;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     bottom: 0px;
//     right: 0px;
//   `)}
// `;
// const ShopContainer = styled.div.attrs({
//   className: "col-12 col-md-12 col-lg-12",
// })``;

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideBar: false,
    };
  }
  toggleSidebar = () => {
    this.setState({ showSideBar: !this.state.showSideBar });
  };
  render() {
    return (
      <>
        <Sidebar
          show={this.state.showSideBar}
          toggleSidebarCallback={this.toggleSidebar}
          categories={this.props.categories}
          selected={
            this.props.match.params.category
              ? this.props.match.params.category.toLowerCase()
              : "All"
          }
        />

        <Body
          shop
          toggleSidebarCallback={this.toggleSidebar}
          {...this.props}
          navTitle={
            this.props.match.params.category
              ? this.props.match.params.category
              : "All"
          }
        />
      </>
    );
  }
}

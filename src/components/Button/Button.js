import React, { Component } from "react";
import { StyledButton } from "./Button.css";

export default class Button extends Component {
  handleClick = () => {
    this.props.handleClick();
  };
  render() {
    return (
      <StyledButton onClick={this.props.handleClick} theme={this.props.theme}>
        {this.props.text ? this.props.text : this.props.children}
      </StyledButton>
    );
  }
}

import React, { Component } from "react";
import {
  Container,
  IconContainer,
  OptionsContainer,
  Option,
  // FilterIcon,
  Wrapper,
} from "./OptionBar.css";
import Filters from "./Options/Filters";

export default class OptionBar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <IconContainer>
            <Filters {...this.props} />
            {/* <span>Filters</span> */}
          </IconContainer>
          <OptionsContainer>
            {this.props.options &&
              this.props.options.map((option) => (
                <Option key={option.name}>{option.name}</Option>
              ))}
          </OptionsContainer>
        </Wrapper>
      </Container>
    );
  }
}

import React, { Component } from "react";
import { Container, Input, IconContainer } from "./Searchbar.css";
import { SidebarSearchIcon } from "../../assets/icons";

export default class Searchbar extends Component {
  render() {
    return (
      <Container>
        <IconContainer>
          <SidebarSearchIcon />
        </IconContainer>
        <Input />
      </Container>
    );
  }
}

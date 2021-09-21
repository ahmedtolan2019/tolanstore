import React, { Component } from "react";
import {
  Container,
  Title,
  ButtonsContainer,
  CloseContainer,
  Wrapper,
} from "./Sidebar.css";
import Avatar from "../Avatar/Avatar";
import Searchbar from "../Searchbar/Searchbar";
import Selector from "../Selector/Selector";
import Button from "../Button/Button";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <Container show={this.props.show}>
        <Wrapper>
          <CloseContainer>
            <span>
              <i
                onClick={this.props.toggleSidebarCallback}
                className="far fa-times-circle btn text-white fs-1"
              />
            </span>
          </CloseContainer>
          <Avatar />
          <Title>{this.props.title ? this.props.title : "Categories"}</Title>
          <Searchbar />
          <Selector
            toggleSidebarCallback={this.props.toggleSidebarCallback}
            selected={this.props.selected}
            baseUrl="/shop/products"
            list={this.props.categories}
          />
          <ButtonsContainer>
            <Button theme="gray" text="Adminstrator" />
            <Button theme="red" text="Log Out" />
          </ButtonsContainer>
        </Wrapper>
      </Container>
    );
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
}

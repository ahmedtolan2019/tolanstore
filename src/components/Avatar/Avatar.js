import React, { Component } from "react";
import { Img, Container, Content, UserName, Role } from "./Avatar.css";

class Avatar extends Component {
  render() {
    let imgUrl = this.props.img
      ? this.props.img
      : `${process.env.PUBLIC_URL}/assets/users/user.png`;
    return (
      <Container>
        <Img src={imgUrl} />
        <Content>
          <UserName>{this.props.name ? this.props.name : "User Name"}</UserName>
          <Role>{this.props.role ? this.props.role : "addedrole"}</Role>
        </Content>
      </Container>
    );
  }
}

export default Avatar;

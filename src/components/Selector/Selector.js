import React, { Component } from "react";
import { Container, List, ListItem, IconContainer } from "./Selector.css";
import { SidebarArrowIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

export default class Selector extends Component {
  componentDidMount() {
    document
      .getElementById("sidebar-scroll-btn")
      .addEventListener("click", () => {
        document.getElementById("scroll-box").scrollTop += 200;
      });
  }

  render() {
    return (
      <Container>
        <List id="scroll-box">
          {this.props.list &&
            this.props.list.map((item) => (
              <Link
                style={{ textDecoration: "none" }}
                key={item.name}
                to={`${this.props.baseUrl}/${item.name.toLowerCase()}/1`}
              >
                <ListItem
                  onClick={this.props.toggleSidebarCallback}
                  className={
                    this.props.selected === item.name.toLowerCase()
                      ? "active"
                      : ""
                  }
                >
                  {item.name}
                </ListItem>
              </Link>
            ))}
        </List>

        <IconContainer id="sidebar-scroll-btn">
          <SidebarArrowIcon />
        </IconContainer>
      </Container>
    );
  }
}

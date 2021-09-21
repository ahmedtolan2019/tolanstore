import React, { Component } from "react";
import styled from "styled-components";
import { SavedListsConnector } from "../../redux/connectors/SavedListsConnector";
import { cssColors } from "../../styles.constants";
// import SavedListsCard from "./SavedListsCard";

const SaveButton = styled.button`
  border: unset;
  background-color: unset;
  &:active {
    background-color: unset;
    color: #d2cfff;
  }
  i {
    font-size: 24px;
    color: ${cssColors.blue};
  }
`;
const SavedListsContainer = styled.div`
  overflow: hidden;
  width: 0px;
  height: 0px;
  display: flex;
  margin-top: 0px;
  transition: height 0.1s ease-in-out;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

export default class SaveToList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
    this.SavedListsContainerRef = React.createRef();
  }
  handleClick = () => {
    this.props.handleClick();
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        {!this.props.isOpen && (
          <SaveButton>
            <i
              onClick={this.handleClick}
              className={this.state.isOpen ? "fas fa-save" : "far fa-save"}
            ></i>
          </SaveButton>
        )}

        <SavedListsContainer
          ref={this.SavedListsContainerRef}
          style={{
            height: this.state.isOpen
              ? `${this.SavedListsContainerRef.current.scrollHeight + 20}px`
              : "",
            width: this.state.isOpen
              ? `${this.SavedListsContainerRef.current.scrollWidth}px`
              : "",
          }}
        >
          <Wrapper>
            <SavedListsConnector
              card
              product={this.props.product}
              isOpen={this.props.isOpen}
              handleClose={this.handleClick}
            />
          </Wrapper>
        </SavedListsContainer>
      </div>
    );
  }
}

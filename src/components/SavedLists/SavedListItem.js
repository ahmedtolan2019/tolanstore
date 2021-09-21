import React, { Component } from "react";
import styled from "styled-components";
import { cssColors, cssFontsWeights } from "../../styles.constants";

const Container = styled.div`
  background-color: ${cssColors.listItems};
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  transition: border-width 0.2s ease;
  &:hover {
    background: ${`${cssColors.darkWhite}`};
    box-shadow: inset 24px 10px 100px ${(props) => `${props.border}10`};
  }
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Circle = styled.div`
  width: 34px;
  height: 34px;
  background: ${(props) => (props.color ? props.color : cssColors.greenLight)};
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  line-height: 18px;
  margin-left: 10px;
`;
const Name = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: ${cssFontsWeights.medium};
`;
const Items = styled.span`
  font-size: 10px;
  font-weight: ${cssFontsWeights.light};
`;

class SavedListItem extends Component {
  render() {
    return (
      <Container border={this.props.color}>
        <Wrapper>
          <ListInfoWrapper>
            <Circle color={this.props.color} />
            <TextWrapper>
              <Name>
                {this.props.name}
                <span> List</span>
              </Name>
              <Items>Items({this.props.items})</Items>
            </TextWrapper>
          </ListInfoWrapper>
          {this.props.card && (
            <button
              style={{
                alignSelf: "center",
                border: "unset",
                background: "none",
                padding: "0px",
              }}
            >
              <i
                onClick={() =>
                  this.props.handleClick(this.props.list, this.props.product)
                }
                className="icon-add-blue"
                style={{ fontSize: "24px" }}
              />
            </button>
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default SavedListItem;

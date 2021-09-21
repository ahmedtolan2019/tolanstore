import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Circle,
  Container,
  Dot,
  Icon,
  IconContainer,
  Wrapper,
  ContentWrapper,
  CirclesContainer,
} from "./Footer.css";

export default class Footer extends Component {
  handleNext = () => {
    if (
      Number.parseInt(this.props.products_total / (this.props.pageSize || 5)) >=
      Number(this.props.match.params.page)
    ) {
      this.props.history.push(
        `/shop/products/${this.props.match.params.category}/${
          Number(this.props.match.params.page) + 1
        }`
      );
    } else {
      this.props.history.push(
        `/shop/products/${this.props.match.params.category}/1`
      );
    }
  };
  handlePrev = () => {
    if (Number(this.props.match.params.page) === 1) {
      this.props.history.push(
        `/shop/products/${this.props.match.params.category}/${Number.parseInt(
          this.props.products_total / (this.props.pageSize || 5)
        )}`
      );
    } else {
      this.props.history.push(
        `/shop/products/${this.props.match.params.category}/${
          Number(this.props.match.params.page) - 1
        }`
      );
    }
  };
  render() {
    // console.log(this.props.total);
    return (
      <Container>
        <Wrapper>
          <ContentWrapper>
            <IconContainer>
              <Icon onClick={this.handlePrev} className="icon-left-open " />
            </IconContainer>
            <CirclesContainer>
              <Link to={`/shop/products/${this.props.match.params.category}/1`}>
                <Circle>1</Circle>
              </Link>

              {this.props.products_total > 20 && (
                <>
                  <Link
                    to={`/shop/products/${this.props.match.params.category}/2`}
                  >
                    <Circle>2</Circle>
                  </Link>

                  <Link
                    to={`/shop/products/${this.props.match.params.category}/3`}
                  >
                    <Circle>3</Circle>
                  </Link>

                  <Dot />
                  <Dot />
                  <Dot />
                </>
              )}
              {this.props.products_total > 20 && (
                <Link
                  to={`/shop/products/${
                    this.props.match.params.category
                  }/${Number.parseInt(
                    this.props.products_total / (this.props.pageSize || 5)
                  )}`}
                >
                  <Circle>
                    {Number.parseInt(
                      this.props.products_total / (this.props.pageSize || 5)
                    )}
                  </Circle>
                </Link>
              )}
            </CirclesContainer>
            <IconContainer>
              <Icon onClick={this.handleNext} className="icon-right-open" />
            </IconContainer>
          </ContentWrapper>
        </Wrapper>
      </Container>
    );
  }
}

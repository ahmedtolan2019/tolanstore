import React, { Component } from "react";
import Card from "./Card";
import { Container, Wrapper, Scroll } from "./ScrollableCards.css";

export default class ScrollableCards extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Scroll>
            {this.props.products ? (
              this.props.products.length === 0 ? (
                <h2>There is no products!</h2>
              ) : null
            ) : null}
            {this.props.products
              ? this.props.products.map((product) => (
                  <Card
                    {...this.props}
                    key={product.id}
                    product={product}
                    category={product.category}
                  />
                ))
              : []}
          </Scroll>
        </Wrapper>
      </Container>
    );
  }
}

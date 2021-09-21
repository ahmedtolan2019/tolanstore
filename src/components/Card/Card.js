import React, { Component } from "react";
// import { SavedListsConnector } from "../../redux/connectors/SavedListsConnector";
import Button from "../Button/Button";
import SaveToList from "../SavedLists/SaveToList";

import {
  ActionsContainer,
  Container,
  ContentContainer,
  ImgContainer,
  FavIcon,
} from "./Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isfav: false,
      loaded: false,
    };
    this.savedListRef = React.createRef();
  }
  handleAddToCart = () => {
    this.props.addToCart(this.props.product);
  };
  handleSaveClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleAddToFav = () => {
    this.setState({ isfav: !this.state.isfav });
    this.props.addToList({ id: 99 }, this.props.product);
  };
  handleLoad = () => {
    this.setState({ loaded: true });
  };
  render() {
    return (
      <Container>
        {!this.state.isOpen && (
          <>
            <ImgContainer className="p-1">
              <img
                src={`${this.props.product.img}`}
                alt="card"
                onLoad={this.handleLoad}
              />
              {!this.state.loaded && <div className="loading">Loading....</div>}
            </ImgContainer>
            <ContentContainer>
              <p className="pt-2">
                <dt>
                  ${this.props.product.price}
                  <span className=" float-end shadow-sm border badge rounded-pill bg-light text-dark">
                    {this.props.category}
                  </span>
                </dt>
              </p>
              <p>{this.props.product.name}</p>

              <article>{this.props.product.description.body}</article>
            </ContentContainer>
          </>
        )}
        <ActionsContainer>
          <SaveToList
            handleClick={this.handleSaveClick}
            product={this.props.product}
            isOpen={this.state.isOpen}
          />

          {!this.state.isOpen && (
            <>
              <Button
                theme="green"
                text="Add To Cart"
                handleClick={this.handleAddToCart}
              />
              <FavIcon
                onClick={this.handleAddToFav}
                className={this.state.isfav ? "fas fa-heart" : "far fa-heart"}
              />
            </>
          )}
        </ActionsContainer>
      </Container>
    );
  }
}

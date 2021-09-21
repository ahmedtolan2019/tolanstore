import React, { Component } from "react";
import { CartConnector } from "../../redux/connectors/CartConnector";
import { SavedListsConnector } from "../../redux/connectors/SavedListsConnector";
import Searchbar from "../Searchbar/Searchbar";
import {
  CartContainer,
  Container,
  ContentContainer,
  ListsContainer,
  SearchbarContainer,
  TitleContainer,
  CartIcon,
  ListsIcon,
  HambLine,
  CategoryHambContainer,
  Wrapper,
} from "./TopNav.css";

export default class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
      showSavedLists: false,
    };
  }

  handleCartClick = () => {
    this.setState({ showCart: !this.state.showCart }, () => {
      this.setState({ showSavedLists: false });
    });
  };
  handleSavedListsClick = () => {
    this.setState({ showSavedLists: !this.state.showSavedLists }, () => {
      this.setState({ showCart: false });
    });
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <CategoryHambContainer
            onClick={this.props.toggleSidebarCallback}
            className="col-2 col-md-auto"
          >
            {this.props.navTitle !== "checkout" ? (
              <>
                <HambLine value={1} />
                <HambLine value={1} />
                <HambLine value={1} />
              </>
            ) : (
              <i
                onClick={() => this.props.history.push("/shop/products")}
                className="fas fa-chevron-left fs-2 text-danger"
              />
            )}
          </CategoryHambContainer>
          <TitleContainer className="col-6 col-md-auto">
            {this.props.navTitle.toUpperCase()}
          </TitleContainer>
          <SearchbarContainer className="col-auto col-md-auto">
            <Searchbar />
          </SearchbarContainer>
          <ListsContainer className="col-2 col-md-auto">
            <ListsIcon
              onClick={this.handleSavedListsClick}
              className="icon-lists"
            />
            <ContentContainer>
              <h2>Lists</h2>
              <small>
                {this.props.lists ? this.props.lists.length : 0} lists
              </small>
            </ContentContainer>
          </ListsContainer>
          <CartContainer
            show={this.state.showCart}
            className="col-2 col-md-auto"
          >
            <CartIcon
              onClick={this.handleCartClick}
              className="icon-carticon"
            />
            <ContentContainer>
              <h2>
                Cart{" "}
                <span>({this.props.cartItems ? this.props.cartItems : 0})</span>
              </h2>
              <small>${this.props.cartPrice ? this.props.cartPrice : 0}</small>
            </ContentContainer>
          </CartContainer>

          <SavedListsConnector
            show={this.state.showSavedLists}
            handleShow={this.handleSavedListsClick}
          />

          <CartConnector
            handleShow={this.handleCartClick}
            show={this.state.showCart}
          />
        </Wrapper>
      </Container>
    );
  }
}

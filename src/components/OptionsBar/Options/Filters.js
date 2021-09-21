import React, { Component } from "react";
import {
  Container,
  FilterIcon,
  Wrapper,
  SortContainer,
  PriceContainer,
  PageSizeContainer,
  FiltersWrapper,
  FiltersContainer,
  SortSelector,
  SortKey,
  SortSelectorWrapper,
  PriceRangeWrapper,
  PageSizeWrapper,
  PageSize,
  PageSizeSelector,
  PriceSliderAllContainer,
  PriceSliderContainer,
  PriceSliderContentContainer,
} from "./Filters.css";

let sortKeys = ["name", "price", "date", "rating"];
let pageSizes = [5, 8, 10, 16, 20];
// let priceRange = {
//   start: 10,
//   end: 10000,
// };

export default class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selections: {
        pageSize: 5,
        sortKey: "name",
      },
      sliderValue: 0,
      isOpen: false,
    };
  }

  handleCheckChange = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
    this.setState(
      (state) => {
        state.selections[event.target.name] = event.target.value;
        //   state.isOpen = false;
        return state;
      },
      () => {
        switch (event.target.name) {
          case "pageSize":
            this.props.setPageSize(this.state.selections.pageSize);
            break;
          case "sortKey":
            this.props.setSortProperty(this.state.selections.sortKey);
            break;

          default:
            break;
        }
      }
    );
  };
  handelShow = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.props.filterPrice(Number(this.state.sliderValue) * 10, 1000);
      // console.log(this.state.sliderValue);
    });
  };
  handleSlider = (event) => {
    this.setState({ sliderValue: event.target.value });
  };
  render() {
    return (
      <Container>
        <Wrapper>
          <div className="d-flex align-items-center mb-2">
            <FilterIcon
              onClick={this.handelShow}
              className={
                this.state.isOpen
                  ? "far fa-times-circle"
                  : "icon-Icon-awesome-filter"
              }
            />
            <span className="btn">Filters</span>
          </div>
          <FiltersContainer className={this.state.isOpen ? "active" : ""}>
            <FiltersWrapper>
              <SortContainer>
                <SortSelectorWrapper>
                  <h5>
                    <span>Sort</span> by
                  </h5>
                  <SortSelector>
                    {sortKeys.map((key) => (
                      <div key={key + "sort"}>
                        <SortKey
                          onChange={this.handleCheckChange}
                          id={key}
                          value={key}
                          name="sortKey"
                          checked={this.state.selections.sortKey === key}
                        ></SortKey>
                        <label className="btn" htmlFor={key}>
                          {key}
                        </label>
                      </div>
                    ))}
                  </SortSelector>
                </SortSelectorWrapper>
              </SortContainer>
              <div className="d-grid gap-3">
                <PriceContainer>
                  <PriceRangeWrapper>
                    <h5>
                      <span>Price</span> Range
                    </h5>
                    <PriceSliderAllContainer>
                      <PriceSliderContainer>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          onChange={this.handleSlider}
                          value={this.state.sliderValue}
                        />
                      </PriceSliderContainer>
                      <PriceSliderContentContainer>
                        <span>{`$${this.state.sliderValue * 10}<`}</span>
                        <span>{`>$1k`}</span>
                      </PriceSliderContentContainer>
                    </PriceSliderAllContainer>
                  </PriceRangeWrapper>
                </PriceContainer>
                <PageSizeContainer>
                  <PageSizeWrapper>
                    <h5>
                      <span>
                        No<span>.</span> Of Products
                      </span>{" "}
                      Per Page
                    </h5>
                    <PageSizeSelector>
                      {pageSizes.map((size) => (
                        <div key={size + "page"}>
                          <PageSize
                            onChange={this.handleCheckChange}
                            id={size}
                            value={size}
                            name="pageSize"
                            checked={
                              Number(this.state.selections.pageSize) ===
                              Number(size)
                            }
                          ></PageSize>
                          <label className="btn" htmlFor={size}>
                            {size}
                          </label>
                        </div>
                      ))}
                    </PageSizeSelector>
                  </PageSizeWrapper>
                </PageSizeContainer>
              </div>
            </FiltersWrapper>
          </FiltersContainer>
        </Wrapper>
      </Container>
    );
  }
}

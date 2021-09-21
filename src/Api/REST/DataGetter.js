/*This component renders the content its parent provides between the start and end tags using the 
children props. This is useful for defining components that provide services to the application but that 
don’t present content to the user. In this case, I need a component that can receive details of the current 
route and its parameters and also access the data store. The component’s componentDidMount and 
componentDidUpdate methods, both part of the component lifecycle described in Chapter 13, call the 
getData method, which gets the parameters from the URL and compares them with those in the data store 
that were added after the last request. If there has been a change, a new action is dispatched that will load 
the data the user requires.
In addition to the category and page number, which are taken from the URL, the action is created with 
_sort and _limit parameters that order the results and set the data size. The values used for sorting and for 
setting the page size will be obtained from the data store. */

import React, { Component } from "react";
import { DataTypes } from "../../redux/Types";

export class DataGetter extends Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
  componentDidUpdate = () => this.getData();
  componentDidMount = () => this.getData();
  getData = () => {
    const dsData = this.props.products_params || {}; //dataSourse
    const rtData = {
      //routeData
      _limit: this.props.pageSize || 5,
      _sort: this.props.sortKey || "name",
      _page: this.props.match.params.page || 1,
      category_like:
        (this.props.match.params.category || "") === "all"
          ? ""
          : this.props.match.params.category,
      price_gte: this.props.priceStart || 0,
      price_lte: this.props.priceEnd || 10000,
    };

    if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
      this.props.loadData(DataTypes.PRODUCTS, rtData);
    }
  };
}

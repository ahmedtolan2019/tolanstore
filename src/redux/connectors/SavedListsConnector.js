import React, { Component } from "react";
import { connect } from "react-redux";
import SavedLists from "../../components/SavedLists/SavedLists";
import SavedListsCard from "../../components/SavedLists/SavedListsCard";
import { removeList, addToList, addList } from "./../ActionCreators";

const mapStateToProps = (dataStore) => ({
  lists: dataStore.lists ? dataStore.lists : [],
});
const mapDispatchToProps = {
  removeList,
  addToList,
  addList,
};

export const SavedListsConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return this.props.card ? (
        <SavedListsCard {...this.props} />
      ) : (
        <SavedLists {...this.props} />
      );
    }
  }
);

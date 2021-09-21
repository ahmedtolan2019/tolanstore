import React, { Component } from "react";
import styled from "styled-components";

import { ShopConnector } from "./redux/connectors/ShopConnector";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { TolanDataStore } from "./redux/DataStore";
// import { cssColors } from "./styles.constants";

const AppContainer = styled.div.attrs({
  className: "container-fluid",
})``;
const Wrapper = styled.div.attrs({
  className: "row",
})``;

class App extends Component {
  render() {
    return (
      <Provider store={TolanDataStore}>
        <Router>
          <AppContainer>
            <Wrapper>
              <Switch>
                <Route path="/shop" component={ShopConnector} />
                <Redirect to="/shop" />
              </Switch>
            </Wrapper>
          </AppContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;

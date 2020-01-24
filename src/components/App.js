/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import Sidebar from "../layout/sidebar/Sidebar";
import ClippedDrawer from "../layout/clipped-drawer/ClippedDrawer";
import Header from "../layout/header/Header";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Sidebar /> */}
        <ClippedDrawer />
        {/* <Header /> */}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);

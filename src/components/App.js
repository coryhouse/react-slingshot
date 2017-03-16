import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
        {' | '}
        <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
        {' | '}
        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

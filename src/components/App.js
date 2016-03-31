import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => (
  <div>
    <IndexLink to="/">Home</IndexLink> | <Link to="/About">About</Link>
    <br />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;

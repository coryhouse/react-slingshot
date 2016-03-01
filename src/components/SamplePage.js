import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div>
        <h2>
          This is a sample Page
        </h2>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

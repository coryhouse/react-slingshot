import React, { PropTypes, Component } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

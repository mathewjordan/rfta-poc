import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title } = this.props;

    return (
      <div className="container">
        <h1>{title}</h1>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mirador from './components/Mirador';

// config
// https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js

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
        <Mirador
          config={{
            id: 'mirador',
            window: {
              allowFullscreen: false,
              sideBarPanel: 'info',
              hideWindowTitle: true,
              sideBarOpen: true,
            },
            windows: [
              {
                loadedManifest:
                  'https://purl.stanford.edu/bk785mr1006/iiif/manifest',
              },
            ],
            workspaceControlPanel: {
              enabled: false,
            },
          }}
          plugins={[]}
        />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;

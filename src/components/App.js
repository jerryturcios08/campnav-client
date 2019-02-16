import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import '../stylesheets/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      isUploaded: false
    };
  }

  render() {
    let submitButton = this.state.isUploaded ? (
      <Button
        style={{ backgroundColor: '#000000', color: 'white' }}
        variant="contained"
      >
        Submit
      </Button>
    ) : (
      <Button
        style={{ backgroundColor: 'grey', color: 'white' }}
        variant="contained"
        disabled
      >
        Submit
      </Button>
    );

    return (
      <div className="App">
        <AppBar
          style={{
            backgroundColor: '#990000'
          }}
          position="fixed"
        >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              CampNav
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="content">
          <input
            className="inputfile"
            type="file"
            name="file"
            id="file"
            accept="image/*"
            capture="camera"
          />
          <label htmlFor="file">
            <i className="fas fa-camera" />
          </label>
          <div>{submitButton}</div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import '../stylesheets/App.css';

class App extends Component {
  render() {
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
          <div>
            <Button
              style={{
                backgroundColor: '#000000',
                color: 'white'
              }}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

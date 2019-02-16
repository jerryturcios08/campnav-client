import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class Result extends Component {
  render() {
    return (
      <div className="result">
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
      </div>
    );
  }
}

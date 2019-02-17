import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class Result extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      score: 0
    };
  }

  componentDidMount() {
    console.log('whats in our state');
    console.log(this.state.responseData);
    /*
    fetch('http://0.0.0.0:5000/api')
      .then(response => response.json())
      .then(data => this.setState({ name: data.name, score: data.score }));
      */
  }

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

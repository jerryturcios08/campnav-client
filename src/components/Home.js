import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import '../stylesheets/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.imageInput = null;
    this.state = {
      isUploadable: false
    };
  }

  handleFormSubmit(e) {
    console.log(this.imageInput.files);

    e.preventDefault();
  }

  handleImageChange() {
    this.setState({
      isUploadable: true
    });
  }

  render() {
    let submitButton = this.state.isUploadable ? (
      <Button
        style={{ backgroundColor: '#000000', color: 'white' }}
        variant="contained"
        onClick={this.handleFormSubmit}
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
          <form>
            <input
              className="inputfile"
              type="file"
              name="file"
              id="file"
              accept="image/*"
              capture="camera"
              onChange={this.handleImageChange}
              ref={(e) => {this.imageInput = e;}}
            />
            <label htmlFor="file">
              <i className="fas fa-camera" />
            </label>
            <div>{submitButton}</div>
          </form>
          <Link to="/result">
            <button>Test to result</button>
          </Link>
        </div>
      </div>
    );
  }
}

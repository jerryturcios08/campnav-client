import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

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
    e.preventDefault();
    console.log(this.imageInput.files);

    const files = this.imageInput.files;
    const formData = new FormData();
    const file = files[0];

    if (!file.type.match('image.*')) {
      return;
    }

    formData.append('photo', file, file.name);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://0.0.0.0:5000/api', true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(xhr.response);
      } else {
        console.log('Error!');
      }
    };

    xhr.send(formData);
  }

  handleImageChange() {
    this.setState({
      isUploadable: true
    });
  }

  render() {
    let submitButton = this.state.isUploadable ? (
      <Link to="/result">
        <button id="enabledSubmit">Submit</button>
      </Link>
    ) : (
      <button id="disabledSubmit" disabled>
        Submit
      </button>
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
              ref={e => {
                this.imageInput = e;
              }}
            />
            <label htmlFor="file">
              <i className="fas fa-camera" />
            </label>
            <div>{submitButton}</div>
          </form>
        </div>
      </div>
    );
  }
}

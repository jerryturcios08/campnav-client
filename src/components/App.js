import React, { Component } from 'react';
import Modal from 'react-modal';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import '../stylesheets/App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.imageInput = null;
    this.state = {
      isUploadable: false,
      photoName: '',
      photoScore: 0,
      responseData: null,
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const files = this.imageInput.files;
    const formData = new FormData();
    const file = files[0];

    if (!file.type.match('image.*')) {
      return;
    }

    formData.append('photo', file, file.name);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://0ee56b97.ngrok.io/api', true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        this.setState({
          responseData: JSON.parse(xhr.response)
        });

        this.openModal();
      } else {
        return;
      }
    }.bind(this);

    xhr.send(formData);
  }

  handleImageChange() {
    this.setState({
      isUploadable: true
    });
  }

  render() {
    let submitButton = this.state.isUploadable ? (
      <button id="enabledSubmit" onClick={this.handleFormSubmit}>
        Submit
      </button>
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
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 className="modal-title">Results</h1>
          {this.state.responseData ? (
            <div>
              <p>{this.state.responseData.name}</p>
              <p>{this.state.responseData.score}</p>
            </div>
          ) : (
            <div>
              <p>None</p>
              <p>0</p>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

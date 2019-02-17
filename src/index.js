import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import App from './components/App';
import * as serviceWorker from './javascript/serviceWorker';

import './stylesheets/index.css';

ReactModal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

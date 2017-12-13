import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth';
import constants from './constants';
const API_URL = constants.API_URL;

const auth = new Auth();

// let a = auth.normalizeUrl(API_URL + 'comics');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
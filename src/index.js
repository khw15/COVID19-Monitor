import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga';
import './css/index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactGA.initialize('UA-171777694-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.initialize('UA-171777694-1', {
    debug: true,
    titleCase: false,
    standardImplementation: true,
    gaAddress: './analytics.js'
});

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
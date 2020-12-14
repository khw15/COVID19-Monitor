import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga';
import './css/index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();
serviceWorkerRegistration.registerValidSW();
serviceWorkerRegistration.checkValidServiceWorker();

ReactGA.initialize('UA-171777694-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.initialize('UA-171777694-1', {
    debug: true,
    titleCase: false,
    standardImplementation: true,
    gaOptions: {
        gaAddress: './analytics.js'
      }
});

ReactDOM.render(<App />, document.getElementById('root'))
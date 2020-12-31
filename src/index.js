import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga';
import './css/index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();

ReactGA.initialize('UA-171777694-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.initialize('UA-171777694-1', {
    debug: true,
    titleCase: false,
    standardImplementation: true,
    gaAddress: 'https://covid19.alfaisal.my.id/analytics.js',
    gaOptions: {
        cookieExpires: 43200,
        cookieUpdate: true
    }
});

ReactDOM.render(<App />, document.getElementById('root'))
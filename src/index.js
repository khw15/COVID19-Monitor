import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-171777694-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.initialize('UA-171777694-1', {
    debug: true,
    titleCase: false
});

ReactDOM.render(<App />, document.getElementById('root'))
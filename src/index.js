import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// render one root component
//                v
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

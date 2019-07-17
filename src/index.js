import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';

import App from './App';

ReactDOM.render((
<BrowserRouter history={ browserHistory }>
    <App />
</BrowserRouter>
), document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundry from './component/ErrorBoundry/ErrorBoundry';


ReactDOM.render(
    <BrowserRouter>
        <ErrorBoundry>
            <App />
        </ErrorBoundry>
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();

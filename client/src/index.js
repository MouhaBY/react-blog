import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import { createStore } from 'redux';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, reduxDevtools);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Auth0ProviderWithHistory>
                    <App />
                </Auth0ProviderWithHistory>
            </Router>
        </Provider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ApplicationReducer from './store';
import { Router } from './router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = document.getElementById('products-app-root');
const user = {
    name: window.user.name, // root.getAttribute('data-user-name'),
    login: window.user.login, // root.getAttribute('data-user-login'),
};
console.log(user);

let store = createStore(
    ApplicationReducer,
    {
        User: {
            name: user.name,
            login: user.login,
        },
    },
    composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
    <BrowserRouter basename="products">
        <Provider store={store}>
            <Router />
        </Provider>
    </BrowserRouter>,
    root,
);

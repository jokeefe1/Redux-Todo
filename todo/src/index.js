import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

const LIST_TODOS = 'LIST_TODOS';

const initialState = {
    todos: ['Hardcoded Todo in state']
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_TODOS:
            return {
                todos: state.todos[0]
            };
        default:
            return state;
    }
};

const store = createStore(todoReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/rootReducer';
import rootSaga from './redux/sagas/rootSaga';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose; 


const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    );

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
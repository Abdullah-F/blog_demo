import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {compose, combineReducers, createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {watchAuth, watchBlog} from './store/sagas/index'
import SignUpReducer from './store/reducers/Auth/signUp'
import SignInReducer from './store/reducers/Auth/signIn'
import BlogReducer from './store/reducers/Blog/blog'

const composeEnhancers = process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;
const rootReducer = combineReducers({
    signUp: SignUpReducer,
    signIn: SignInReducer,
    blog: BlogReducer,
}); 

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
const app = <Provider store={store} ><Router><App /></Router></Provider>;
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBlog)
ReactDOM.render(app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

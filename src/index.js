import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { searchRobots, requestRobots } from './reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const rootReducers = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
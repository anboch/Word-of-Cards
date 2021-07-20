import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import reducer from '../src/redux/reducer'
import {wotcher} from './redux/saga/wotcher'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(wotcher)


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

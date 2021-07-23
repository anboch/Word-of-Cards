import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {rootReducer} from './redux/Reducers/rootReducer'
import App from './Components/App/App';
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {wotcher} from './redux/saga/wotcherUser'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware,thunk))
);
sagaMiddleware.run(wotcher);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}> 
     <BrowserRouter>
    <App />
    </BrowserRouter> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

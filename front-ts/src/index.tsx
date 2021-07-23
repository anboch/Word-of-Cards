import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootWatcher } from './redux/saga/rootWatcher';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootWatcher);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

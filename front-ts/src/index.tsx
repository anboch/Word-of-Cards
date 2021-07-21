import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom'

import App from './App';
// import createSagaMiddleware from "redux-saga";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(wotcher);

ReactDOM.render(
  <React.StrictMode>
      {/* <Provider store={store}></Provider> */}
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

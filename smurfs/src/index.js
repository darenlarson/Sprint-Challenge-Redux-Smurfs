import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import rootReducer from './reducers';
import App from './components/App';

// const store = createStore(
//   () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
//   applyMiddleware(/* be sure to throw in the proper middlewares here*/)
// );

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </Provider>,
  document.getElementById('root')
);

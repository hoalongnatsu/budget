import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './App';
import Budget from './components/Budget/';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/budget/:year/:month' component={Budget}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
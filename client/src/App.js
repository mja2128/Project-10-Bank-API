import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from './reducers/reducers';

import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
    )
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

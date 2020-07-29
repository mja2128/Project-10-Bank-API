import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
      </Provider>
  );
}

export default App;

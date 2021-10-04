import React from 'react';
import './App.css';
import { Home } from './Views/Home';
import { InfoActor } from './Views/InfoActor';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/InfoActor">
            <InfoActor />
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;

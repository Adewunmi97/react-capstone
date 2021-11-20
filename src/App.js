import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home />
          )}
        />
        <Route
          exact
          path="/country/:countryName"
          render={() => (
            <Info />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { NavBar } from './conponents/NavBar/NavBar';
import Cars from './views/Cars/Cars';
import About from './views/About/About';
import CarDetail from './views/Cars/CarDetail/CarDetail';
import NoMatch from './views/NoMatch/NoMatch';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Router>
      <div className="App container">
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          <Route path="/about"><About /></Route>
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

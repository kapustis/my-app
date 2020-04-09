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
import { Home } from './views/Home/Home';
import { Alert } from './conponents/Alert/Alert';
import { AlertState } from './context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <Router>
        <div className="App container">
          <NavBar />
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cars" exact component={Cars} />
            <Route path="/cars/:name" component={CarDetail} />
            <Route path="/about"><About /></Route>
            <Route path="*"><NoMatch /></Route>
          </Switch>
        </div>
      </Router>
    </AlertState>
  );
}

export default App;

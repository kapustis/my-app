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

function App() {
  return (
    <Router>
      <div className="App container">
        <NavBar />
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
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

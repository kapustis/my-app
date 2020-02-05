import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Cars from "./Cars/Cars";
import About from "./About/About";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="nav">
                        <ul>
                            <li>
                                <NavLink to="/" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cars">Cars</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact render={() => <h1>Home Page</h1>}/>
                        <Route path="/about" >
                            <About/>
                        </Route>
                        <Route path="/cars" component={Cars}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Cars from "./conponents/Cars/Cars";
import About from "./conponents/About/About";
import CarDetail from "./conponents/Cars/CarDetail/CarDetail";
import NoMatch from "./conponents/NoMatch/NoMatch";

class App extends React.Component {
    state = {
        pageTitle: 'Home Page'
    }
    changeTitleHandler = () => {
        const oldTitle = this.state.pageTitle

        const newTitle = oldTitle + ' is changed'

        this.setState({
            pageTitle: newTitle
        })
    }

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
                        <Route path="/" exact render={
                            () => <>
                                <h1>{this.state.pageTitle}</h1>
                                <button onClick={this.changeTitleHandler}>Change title</button>
                                </>
                        }/>
                        <Route path="/about" >
                            <About/>
                        </Route>
                        <Route path="/cars/:name" component={CarDetail}/>
                        <Route path="/cars" component={Cars}/>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

import React from 'react';
import './App.scss';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch, Redirect} from 'react-router-dom';
import Auth from "./containers/Auth/Auth";
import QuizCreate from "./containers/QuizCreate/QuizCreate";
import Quiz from "./containers/Quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import {connect} from "react-redux";
import {autoLogin} from "./store/actions/auth";
import Logout from "./components/Logout/Logout";

class App extends React.Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        let routes;

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/quiz-create"><QuizCreate/></Route>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/" exact><QuizList/></Route>
                    <Redirect to="/" />
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path="/auth"><Auth/></Route>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/" exact><QuizList/></Route>
                    <Redirect to="/"/>
                </Switch>
            )
        }

        return (<Layout>{routes}</Layout>);
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

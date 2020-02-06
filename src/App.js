import React from 'react';
import './App.scss';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom';
import Auth from "./containers/Auth/Auth";
import QuizCreate from "./containers/QuizCreate/QuizCreate";
import Quiz from "./containers/Quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/auth">
                        <Auth/>
                    </Route>
                    <Route path="/quiz-create">
                        <QuizCreate/>
                    </Route>
                    <Route path="/quiz/:id">
                        <Quiz/>
                    </Route>
                    <Route path="/">
                        <QuizList/>
                    </Route>
                </Switch>
            </Layout>
        );
    }
}

export default App;

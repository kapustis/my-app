import React, {Component} from 'react'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import classes from './QuizList.module.scss'
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends Component {
    state = {
        quizes: [],
        loading: true
    };

    componentDidMount = async () => {
        try {
            let quizes = [];
            const res = await axios.get('https://serverAdress/quizes.json');
            Object.keys(res.data).forEach((key, index) => {
                quizes.push({id: key, name: `Тест №${index + 1}`})
            });

            this.setState({quizes, loading: false})
        } catch (errorBag) {
            alert(errorBag)
        }
    };

    renderQuizzes() {
        return this.state.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {this.state.loading ? <Loader/> : <ul>{this.renderQuizzes()}</ul>}
                </div>
            </div>
        )
    }
}

export default QuizList

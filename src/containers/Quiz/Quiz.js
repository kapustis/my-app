import React, {Component} from 'react'
import classes from './Quiz.module.scss'
import Loader from "../../components/UI/Loader/Loader";
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import axios from "axios";

class Quiz extends Component {
    state = {
        loading: true,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        isCompleted: false,
        res: {},
        quiz: []
    };

    componentDidMount = async () => {
        console.log('ID = ', this.props.match.params.id);
        try {
            const response = await axios.get(`https://react-app-78e60.firebaseio.com/quizzes/${this.props.match.params.id}.json`);
            console.log(response);
            const quiz = response.data;
            this.setState({quiz: quiz, loading: false})
        } catch (errorBag) {
           alert(errorBag)
        }
    };

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') return;
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const res = this.state.res;

        if (question.rightAnswerId === answerId) {
            if (!res[question.id]) res[question.id] = 'success';

            this.setState({answerState: {[answerId]: 'success'}, res});

            const timeOut = window.setTimeout(() => {
                if (this.isQuizCompleted()) {
                    // alert('Finish');
                    this.setState({isCompleted: true})
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeOut)
            }, 1000);

        } else {
            // alert('answer not correct');
            res[question.id] = 'error';
            this.setState({
                // activeQuestion: this.state.activeQuestion + 1,
                answerState: {[answerId]: 'error'},
                res
            })
        }
    };

    isQuizCompleted() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    replayHandler = () => {
        this.setState({
            activeQuestion: 0,
            isCompleted: true,
            res: {},
            answerState: null
        })
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    {this.state.loading
                        ? <Loader/>
                        : this.state.isCompleted
                            ? <FinishedQuiz res={this.state.res} quiz={this.state.quiz} onRetry={this.replayHandler}/>
                            :
                            <>
                                <h1>Ответьте на все вопросы</h1>
                                <ActiveQuiz
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    quizLength={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    state={this.state.answerState}
                                />
                            </>
                    }
                </div>
            </div>
        )
    }
}


export default Quiz

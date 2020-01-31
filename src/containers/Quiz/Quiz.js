import React, {Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        isCompleted: null,
        res: {},
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {id: 1, text: 'Черный'},
                    {id: 2, text: 'Синий'},
                    {id: 3, text: 'Красный'},
                    {id: 4, text: 'Зеленый'}
                ]
            },
            {
                id: 2,
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ]
    };

    isQuizCompleted() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') return;
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const res = this.state.res;

        if (question.rightAnswerId === answerId) {
            if (!res[question.id]) res[question.id] = 'success';

            this.setState({answerState: {[answerId]: 'success'},res});

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
                answerState: {[answerId]: 'error'},
                res
            })
        }
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    {
                        this.state.isCompleted ?
                            <FinishedQuiz
                                res={this.state.res}
                                quiz={this.state.quiz}
                            /> :
                            <>
                                <h1>Ответьте на все вопросы</h1>
                                <ActiveQuiz
                                    quizLength={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    state={this.state.answerState}
                                />
                            </>

                    }


                </div>
            </div>
        )
    }
};


export default Quiz

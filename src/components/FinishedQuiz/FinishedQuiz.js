import React from 'react'
import classes from './FinishedQuiz.module.scss'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.res).reduce((total, key) => {
        if (props.res[key] === 'success') total++;
        return total
    }, 0);
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    Вопрос
                    <i className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>2. </strong>
                    Вопрос
                    <i className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
};

export default FinishedQuiz

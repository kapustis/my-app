import React, {Component} from 'react'
import classes from './QuizCreate.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class QuizCreate extends Component {
    addQuestionHandler = () => {
        alert('addQuestionHandler')
    };
    createQuizHandler = () => {
        alert('createQuizHandler')
    };

    render() {
        return (
            <div className={classes.QuizCreate}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>
                        <Input type="text"/>
                        <hr/>
                        <Input type="text"/>
                        <Input type="text"/>
                        <Input type="text"/>
                        <Input type="text"/>

                        {/*<select/>*/}

                        <Button  onClick={this.addQuestionHandler}>
                            Добавить вопрос
                        </Button>

                        <Button onClick={this.createQuizHandler}>
                            Создать тест
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreate

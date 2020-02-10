import React, {Component} from 'react'
import classes from './Auth.module.scss'
import Button from '../../components/UI/Button/Button'
import Input from "../../components/UI/Input/Input";

class Auth extends Component {
    loginHandler = () => {
        alert("Login click")
    };
    registerHandler = () => {
        alert("Login register")
    };
    submitHandler = event => {
        event.preventDefault()
    };

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input label="Email" type="email"/>
                        <Input label="Пароль" type="password" />

                        <Button onClick={this.loginHandler}>Войти</Button>
                        <Button onClick={this.registerHandler}>Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth

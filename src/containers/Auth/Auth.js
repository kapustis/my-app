import React, {Component} from 'react'
import  classes from './Auth.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
/**
 * @return {boolean}
 */
function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                name: 'email',
                placeholder: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                // label: 'Пароль',
                name:'pass',
                placeholder: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };
    loginHandler = () => {
        alert("Login click")
    };
    registerHandler = () => {
        alert("Login register")
    };
    submitHandler = event => {
        event.preventDefault()
    };
    validateControl(value, validation) {
        if (!validation) return true;

        let isValid = true;

        if (validation.required) isValid = value.trim() !== '' && isValid;
        if (validation.email) isValid = ValidateEmail(value) && isValid;
        if (validation.minLength) isValid = value.length >= validation.minLength && isValid;

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};
        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({formControls, isFormValid})
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    name={control.name}
                    placeholder={control.placeholder}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h2>Авторизоваться</h2>
                    <form onSubmit={this.submitHandler}  className={classes.AuthForm}>
                        {this.renderInputs()}
                        {/*<Input  type="text" placeholder="Username"/>*/}
                        {/*<input type="password" placeholder="Password" />*/}
                        <Button onClick={this.loginHandler} disabled={!this.state.isFormValid}>Войти в систему</Button>
                        <a href="/" onClick={this.registerHandler}><p> У вас нет аккаунта? Регистрация </p></a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth
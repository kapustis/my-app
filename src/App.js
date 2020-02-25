import React from 'react';
import { connect } from 'react-redux'
import {increment,incrementNumber,decrement,reset} from "./redux/action/action";
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <div className={'App'}>
                <h1>Счетчик <strong>{this.props.counter}</strong></h1>
                <hr/>
                <div className="Actions">
                    <button onClick={this.props.increment}>Добавить 1</button>
                    <button onClick={() => this.props.incrementNumber(15)}>Добавить 15</button>
                    <button onClick={this.props.decrement}>Уменьшить 1</button>
                    <button onClick={this.props.reset}>Сброс</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counter: state.counter
    }
};
const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch(increment()),
        incrementNumber: number => dispatch(incrementNumber(number)),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

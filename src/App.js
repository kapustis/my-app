import React from 'react';
import { connect } from 'react-redux'
import './App.scss';

class App extends React.Component {
    // state = {
    //     counter: 0
    // };

    updateCounter(value) {
        // this.setState({
        //     counter: this.state.counter + value
        // })
    }

    render() {
        return (
            <div className={'App'}>
                <h1>Счетчик <strong>{this.props.counter}</strong></h1>
                <hr/>
                <div className="Actions">
                    <button onClick={this.props.increment}>Добавить 1</button>
                    <button onClick={this.props.decrement}>Добавить 1</button>
                    <button onClick={this.props.reset}>Сброс</button>
                </div>
            </div>
        );
    }
}
// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counter: state.counter
    }
};
const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' })
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

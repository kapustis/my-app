import React from "react";
import './Car.scss';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        // this.timerID = setInterval(() => this.tick(), 1000);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate Car', nextProps, nextState,nextContext)
        return nextProps.model.trim() !== this.props.model.trim()
    }
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('UNSAFE_componentWillUpdate Car',nextProps,nextState,nextContext)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate Car',prevProps,prevState,snapshot)
    }

    componentWillUnmount() {
        // clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="Car">
                <h1>Hello, {this.props.name}</h1>
                <p>Model : {this.props.model} </p>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                <input type="text" onChange={this.props.changeName} value={this.props.model}/>
                <button onClick={this.props.onChangeText}>Click</button>
                {this.props.children}
            </div>
        );
    }
}

export default Car

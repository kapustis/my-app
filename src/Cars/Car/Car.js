import React from "react";
import style from './Car.module.scss';
import withClass from '../../hoc/withClass'

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount Car')
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <>
                <h1>Hello, {this.props.name}</h1>
                <p>Model : {this.props.model} </p>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                {/*<input type="text" onChange={this.props.changeName} value={this.props.model}/>*/}
                {/*<button onClick={this.props.onChangeText}>Click</button>*/}
                {this.props.children}
            </>
        );
    }
}

// export default Car
export default withClass(Car,style.Car)

import React from "react";
import './Car.css';

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
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="Car">
                <h1 style={{color: 'rgba(52,132,152,1)'}}>Hello, {this.props.name}</h1>
                <p style={{color:'#004d61'}}>Model : {this.props.model} </p>
                {/*{this.props.children}*/}
                <h2 style={{color:'#ff502f'}}>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                <button>Click</button>
            </div>
        );
    }
}

export default Car

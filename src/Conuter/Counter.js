import React from "react";
// import Auxiliary from "../hoc/Auxiliary";

class Counter extends React.Component{
    state = {
        counter: 0
    };
    incrementCounter = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    };
    decrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    };

    render() {
        return(
            <>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>
            </>
        )
    }
}
export default Counter

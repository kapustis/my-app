import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Car.module.scss';

class Car extends React.Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    // console.log('componentWillUnmount Car')
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={classes.Car} onClick={() => this.props.history.push(`/cars/${this.props.name.toLowerCase()}`)}>
        <h1>
          Hello,
          {this.props.name}
        </h1>
        <p>
          Model :
          {this.props.model}
        </p>
        <h2>
          Сейчас
          {this.state.date.toLocaleTimeString()}
          .
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Car);

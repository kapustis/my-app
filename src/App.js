import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Car from "./Car/Car";

class App extends React.Component {
    constructor(props) {
        console.log('constructor App');
        super(props);
        this.state = {
            cars: [
                // {id: 1, name: 'Honda', model: 'NSX'},
                // {id: 2, name: 'Toyota', model: 'AE86 Apex'},
                {id: 3, name: 'BMW', model: 'M3 E30'},
            ],
            showCar: false,
            headText: 'Редактировать'
        };
    }

    changeHeadText = (newText) => {
        this.setState({headText: newText})
    };
    changeName(name, index) {
        const car = this.state.cars[index];
        car.model = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars})
    }
    toggleShowCars = () => {
        this.setState({showCar: !this.state.showCar})
    };

    carItem = () => {
        return this.state.cars.map((car, index) =>
            <Car key={car.id} name={car.name} model={car.model}
                 onChangeText={() => this.changeHeadText(car.name)}
                 changeName={event => this.changeName(event.target.value, index)}>
                <p>Индекс елемента :{index} и id:{car.id}</p>
            </Car>
        );
    };

    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount App');
    }

    componentDidMount() {
        console.log('componentDidMount App')
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{this.state.headText}</h1>
                    <button onClick={this.toggleShowCars}>Toggle cars</button>
                </header>
                <div className='content'>
                    {this.state.showCar ? this.carItem() : <p>no item</p>}
                </div>
            </div>
        );
    }
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

class App extends React.Component {
    state = {
        cars: [
            {id: 1, name: 'Honda', model: 'NSX'},
            {id: 2, name: 'Toyota', model: 'AE86 Apex'},
            {id: 3, name: 'BMW', model: 'M3 E30'},
        ],
        headText: 'Редактировать'
    };
    changeHeadText = (newText) => {
        this.setState({headText: newText})
    };

    carItem() {
        return this.state.cars.map((car,index) =>
            <Car key={car.id} name={car.name} model={car.model} onChangeText={() => this.changeHeadText(car.name)}>
                <p>Индекс елемента :{index} и id:{car.id}</p>
            </Car>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{this.state.headText}</h1>
                </header>
                <div className='content'>
                    {this.carItem()}
                    {/*{this.state.cars.map((car, index) => {*/}
                    {/*        return (*/}
                    {/*            <Car key={car.id} name={car.name} model={car.model} onChangeText={() => this.changeHeadText(car.name)}>*/}
                    {/*            <p>Индекс елемента :{index} и id:{car.id}</p>*/}
                    {/*            </Car>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
        );
    }
}

export default App;

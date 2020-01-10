import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

class App extends React.Component {
    state = {
        cars: [
            {id: 1, name: 'Honda', model: 'NSX'},
            {id: 2, name: 'Toyota', model: 'AE86 Apex'},
            {id: 3, name: 'BMW', model: 'M3 E30'},
        ]
    };

    carItem() {
        const Cars = this.state.cars;
        return Cars.map((car) =>
            <Car key={car.id} name={car.name} model={car.model}/>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Редактировать <code>src/App.js</code> сохраните, чтобы перезагрузить..</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Учиться реагировать
                    </a>
                </header>
                <div className='content'>
                    {this.carItem()}
                </div>
            </div>
        );
    }
}

export default App;

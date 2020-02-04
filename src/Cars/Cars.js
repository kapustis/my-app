import React, {Component} from 'react'
import Car from './Car/Car'
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {id: 1, name: 'Honda', model: 'NSX'},
                {id: 2, name: 'Toyota', model: 'AE86 Apex'},
                {id: 3, name: 'BMW', model: 'M3 E30'},
            ],
            showCar: false,
            headText: 'Редактировать'
        };
    }

    // changeHeadText = (newText) => {
    //     this.setState({headText: newText})
    // };

    // changeName(name, index) {
    //     const car = this.state.cars[index];
    //     car.model = name;
    //     const cars = [...this.state.cars];
    //     cars[index] = car;
    //     this.setState({cars})
    // }

    // toggleShowCars = () => {
    //     this.setState({showCar: !this.state.showCar})
    // };

    // carItem = () => {
    //     return this.state.cars.map((car, index) =>
    //         <ErrorBoundary key={index}>
    //             <Car key={car.id} name={car.name} model={car.model}>
    //                 <p>Индекс елемента :{index} и id:{car.id}</p>
    //             </Car>
    //         </ErrorBoundary>
    //     );
    // };

    render() {
        return (
            <>
                {this.state.cars.map((car, index) => {
                    return (
                        <Car
                            key={index}
                            name={car.name}
                            model={car.model}
                        />
                    )
                })}
            </>
        );
    }
}

export default Cars

import React, {Component} from 'react'
import Car from './Car/Car'

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

import React from 'react';
import './App.scss';
import Cars from "./Cars/Cars";

// import Counter from "./Conuter/Counter";

class App extends React.Component {



    render() {
        return (
            <div className="App">

                <Cars/>

                {/*<header className="App-header">*/}
                    {/*<h1>{this.state.headText}</h1>*/}
                    {/*<button onClick={this.toggleShowCars}>Toggle cars</button>*/}
                    {/*<Counter/>*/}
                {/*</header>*/}
                {/*<div className='content'>*/}
                    {/*{this.state.showCar ? this.carItem() : <p>no item</p>}*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;

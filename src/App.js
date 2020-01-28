import React from 'react';
import './App.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headText: 'Редактировать'
        };
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{this.state.headText}</h1>
                </header>
                <div className='content'/>
            </div>
        );
    }
}

export default App;

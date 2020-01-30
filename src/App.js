import React from 'react';
import './App.scss';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headText: 'Редактировать'
        };
    }

    render() {
        return (
            // <div className="App">
            //     <header className="App-header">
            //         <h1>{this.state.headText}</h1>
            //     </header>
            //     <div className='content'>
                    <Layout>
                        <Quiz/>
                    </Layout>
                // </div>
            // </div>
        );
    }
}

export default App;

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
        return (<Layout><Quiz/></Layout>);
    }
}

export default App;

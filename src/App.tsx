import React, { Component } from 'react';
import Count from './containers/Count'
import  Person  from './containers/Person'
import StateSet from './components/State'


class App extends Component {
    render() {
        return (
            <div>
                <Count  />
                <hr/>
                <Person />
                <hr/>

                <StateSet />
            </div>
        );
    }
}

export default App;
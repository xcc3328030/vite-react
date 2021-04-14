import React, { Component } from 'react'
import Header from './compontents/Header'
import List from './compontents/List'
import Footer from './compontents/Footer'
import './index.css'

class App extends Component {
    render() {
        return (
            <div className="todo-container">
               <div className="todo-wrap">
                    <Header />
                    <List />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
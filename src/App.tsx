import React, { Component } from 'react'
import Header from './compontents/Header'
import List from './compontents/List'
import Footer from './compontents/Footer'
import './index.css'

interface Todo {
    id: number
    name: string
    isdo: boolean
}

class App extends Component {
 
    state = {
        todos: [
            { id: 1,name: '吃饭', done: true },
            { id: 2,name: '睡觉', done: true },
            { id: 3,name: '打代码', done: false }
        ]
    }

    addTodo = (todo: object) :void=>{
        const { todos } = this.state
        const newTodos = [todo, ...todos]
        this.setState({
            todos: newTodos
        })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
               <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
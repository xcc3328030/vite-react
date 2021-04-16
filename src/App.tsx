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

    updateTodo = (id: number, done: boolean):void=>{
        // 获取状态中的todos
        const {todos} = this.state
        const newTodos = todos.map(todo => {
            if(todo.id === id) return {...todo, done}
            else return todo
        })
        this.setState({
            todos: newTodos
        })
    }

    checkAllTodo = (done: boolean)=>{
        const {todos} = this.state
        const newTodos = todos.map(todo => {
            return {...todo, done}
        })
        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id: number) =>{
       const {todos} = this.state
       const newTodos = todos.filter(todo=>{
            return todo.id !== id
        })
        this.setState({
            todos: newTodos
        })
    }

    clearDone = () => {
        const {todos} = this.state
       const newTodos = todos.filter(todo=>{
            return !todo.done
        })
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
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone} />
                </div>
            </div>
        );
    }
}

export default App;
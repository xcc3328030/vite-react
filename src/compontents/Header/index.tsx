import React, { Component } from 'react';
import {nanoid} from 'nanoid'

class Header extends Component {
    handleChange = (e:any)  => {
        const { keyCode, target } = e
        if(keyCode !== 13) return
        if(!target.value.trim()) return
        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        this.props.addTodo(todoObj)
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleChange} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;
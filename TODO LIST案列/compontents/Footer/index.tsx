import React, { Component } from 'react';

class Footer extends Component {

    handleCheckAll = (event:any)=>{
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearDone = () => {
        this.props.clearDone()
    }

    render() {
        const {todos} = this.props
        let countTotal = todos.reduce((pre, currt)=>{
            if(currt.done) pre ++
            return pre
        }, 0)
        let total = todos.length
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" checked={countTotal === total && total !== 0} onChange={event=>this.handleCheckAll(event)}/>
                </label>
                <span>
                <span>已完成{countTotal}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;
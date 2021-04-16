import React, { Component } from 'react';

class Item extends Component {

    state = {mouse: false}

    handleMouse = (flag: boolean)=>{
        this.setState({mouse: flag})
    }

    handleChange = (event:any,id:string)=>{
        this.props.updateTodo(id, event.target.checked)
    }

    handleDelete = (id: number) =>{
        if(window.confirm("你确定删除吗？")){
             this.props.deleteTodo(id)
        }
    }
    
    render() {
        const { name, done, id } = this.props
        const { mouse } = this.state
        return (
            <li style={{backgroundColor: mouse?'#ddd':'white'}} onMouseLeave={()=>this.handleMouse(false)} onMouseEnter={()=>this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={(event)=>this.handleChange(event, id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}

export default Item;
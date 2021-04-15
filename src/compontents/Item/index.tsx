import React, { Component } from 'react';

class Item extends Component {

    state = {mouse: false}

    handleMouse = (flag: boolean)=>{
        this.setState({mouse: flag})
    }

    handleChange = (event:any,id:string)=>{
        console.log(event.target.checked)
        console.log(id)
    }
    
    render() {
        const { name, done, id } = this.props
        const { mouse } = this.state
        return (
            <li style={{backgroundColor: mouse?'#ddd':'white'}} onMouseLeave={()=>this.handleMouse(false)} onMouseEnter={()=>this.handleMouse(true)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={(event)=>this.handleChange(event, id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}

export default Item;
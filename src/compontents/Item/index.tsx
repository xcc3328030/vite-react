import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>xxxxx</span>
                </label>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
        )
    }
}

export default Item;
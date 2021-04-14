import React, { Component } from 'react';
import Item from '../Item'

class List extends Component {
    render() {
        return (
            <ul className="todo-main">
                <Item />
            </ul>
        );
    }
}

export default List;
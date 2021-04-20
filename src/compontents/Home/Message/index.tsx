import React, { Component } from 'react';
import {  NavLink, Route } from 'react-router-dom';
import Detail from './Detail'

class Message extends Component {

    state = {
        msgs: [
            {id: '1', name: "wang"},
            {id: '2', name: "li"}
        ]
    }
    render() {
        const {msgs} = this.state
        return (
           <div>
            Message
                <ul>
                {
                    msgs.map(msg => {
                        return  <li key={msg.id}>
                                    <NavLink to={`/home/message/detail?id=${msg.id}&name=${msg.name}`}>{msg.name}</NavLink>
                                </li>
                    })
                }
                </ul>
                <hr/>
                {/* <Route path="/home/message/detail/:id/:name" component={Detail}></Route> */}
                <Route path="/home/message/detail" component={Detail}></Route>
           </div> 
        );
    }
}

export default Message;
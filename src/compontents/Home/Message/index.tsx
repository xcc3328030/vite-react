import React, { Component } from 'react';
import {  Link, Route } from 'react-router-dom';
import Detail from './Detail'

class Message extends Component {

    state = {
        msgs: [
            {id: '1', name: "wang"},
            {id: '2', name: "li"}
        ]
    }

    pushShow = (id:string, name:string) => {
        this.props.history.push(`/home/message/detail?id=${id}&name=${name}`)    
    }

    replaceShow = (id:string, name:string) => {
        this.props.history.replace(`/home/message/detail?id=${id}&name=${name}`)    
    }

    forward = () => {
        this.props.history.goForward()
    }

    back = () => {
        this.props.history.goBack()
    }

    goto = () => {
        this.props.history.go(1)
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

                                    {/*  param 传参
                                         <Link to={`/home/message/detail/${msg.id}/${msg.name}`}>{msg.name}</Link> 
                                    */}
                                    <Link to={`/home/message/detail?id=${msg.id}&name=${msg.name}`}>{msg.name}</Link> 
                                  &nbsp; <button onClick={()=>this.pushShow(msg.id, msg.name)}>push查看</button>
                                   &nbsp;<button onClick={()=>this.replaceShow(msg.id, msg.name)}>replace查看</button>
                                    {/* state传参 */}
                                    {/* <Link to={{pathname: '/home/message/detail', state:{id:msg.id,name:msg.name}}}>{msg.name}</Link>  */}
                                </li>
                    })
                }
                </ul>
                <hr/>
                {/* params传参 <Route path="/home/message/detail/:id/:name" component={Detail}></Route> */}
                {/* search传参  <Route path="/home/message/detail" component={Detail}></Route> */}
                {/* state传参 */}
                <Route path="/home/message/detail" component={Detail}></Route>

                <button onClick={this.forward}>前进</button>
                &nbsp;<button onClick={this.back}>回退</button>
                 &nbsp;<button onClick={this.goto}>go</button>
           </div> 
        );
    }
}

export default Message;
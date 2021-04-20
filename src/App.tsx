import React, { Component } from 'react';
import {  Switch,  Route, Redirect } from 'react-router-dom';
import Home from './compontents/Home';
import About from './compontents/About';
import MyNavLink from './compontents/MyNavLink';
import './bootstrap.css';

class App extends Component {

    render() {
        return (
             <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
             
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item" href="./about.html">About</a>
                                <a className="list-group-item active" href="./home.html">Home</a>
                            */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                            {/* 
                                <NavLink activeClassName="is-active"  className="list-group-item" to="/about">about</NavLink>
                                <NavLink activeClassName="is-active"  className="list-group-item" to="/home">home</NavLink> 
                            */}
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/home"  component={Home}></Route>
                                    <Redirect to="/about"></Redirect>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
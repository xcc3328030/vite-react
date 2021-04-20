import React, { Component } from 'react';
import {  Route, Redirect } from 'react-router-dom';
import MyNavLink from '../MyNavLink';
import Message from './Message'
import News from './News';

class Home extends Component {

    render() {
        return (
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                      <MyNavLink to="/home/news">News</MyNavLink>
                  </li>
                  <li>
                    <MyNavLink to="/home/message">Message</MyNavLink>
                  </li>
                </ul>
                <Route >
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    <Redirect to="/home/news"></Redirect>
                </Route>
              </div>
            </div>
        );
    }
}

export default Home;
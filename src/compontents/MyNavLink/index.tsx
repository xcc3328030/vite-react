import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

class MyNavLink extends Component {
 
    render() {
        return (
            <div>
                <NavLink className="list-group-item" {...this.props}></NavLink>
            </div>
        );
    }
}

export default MyNavLink;
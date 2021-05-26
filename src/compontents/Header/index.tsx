import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';


class Header extends Component {

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
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>

                  <button onClick={this.forward}>前进</button>
                &nbsp;<button onClick={this.back}>回退</button>
                 &nbsp;<button onClick={this.goto}>go</button>

                 <hr/>
            </div>
        );
    }
}

export default withRouter(Header)
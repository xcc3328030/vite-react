import React, { Component, lazy, Suspense  } from 'react';

import {  Switch,  Route, NavLink } from 'react-router-dom';

const Home = lazy(() => import("../Home"))
const About = lazy(() => import("../About"))

class LazyLoad extends Component {

    render() {
        return (
            <div>
                <NavLink to="/about">about</NavLink>&nbsp;&nbsp;
                <NavLink  to="/home">home</NavLink> 

                <div>
                    <Switch >
                        <Suspense fallback={<h1>Loading....</h1>}>
                            <Route path="/about" component={About}></Route>
                            <Route path="/home"  component={Home}></Route>
                        </Suspense>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default LazyLoad;
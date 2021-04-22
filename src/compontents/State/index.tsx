import React, { Component } from 'react';

class StateSet extends Component {
    state={count: 0}

    add = () => {
        const {count} = this.state
        this.setState({ count: count+1 },() => {
                console.log(this.state.count);
        })
    }

    render() {
        return (
            <div>
                <h2>求和：{this.state.count}</h2>
                <button onClick={this.add}>点击+1</button>
            </div>
        );
    }
}

export default StateSet;
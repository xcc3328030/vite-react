import React, { Component } from 'react';

class Count extends Component {
    state = {
        count: 0
    }

    add = () => {
        const {value} = this.selectNmuber
        const {count} = this.state
        this.setState({
            count: count + value*1
        })
    }
    
    deAdd = () => {
        const {value} = this.selectNmuber
        const {count} = this.state
        this.setState({
            count: count - value*1
        }) 
    }

    addIfOadd = () => {
        const {value} = this.selectNmuber
        const {count} = this.state
        if(count % 2 !== 0){
            this.setState({
                count: count + value*1
            }) 
        }
       
    }

    addIfAsync = () => {
        const {value} = this.selectNmuber
        const {count} = this.state
        setTimeout(() => {
            this.setState({
                count: count + value*1
            }) 
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <select ref={c=>this.selectNmuber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;<button onClick={this.add}>+</button>
                &nbsp;<button onClick={this.deAdd}>-</button>
                &nbsp;<button onClick={this.addIfOadd}>当前和为奇数再加</button>
                &nbsp;<button onClick={this.addIfAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;
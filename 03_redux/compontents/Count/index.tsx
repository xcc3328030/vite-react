import React, { Component } from 'react';
import store from '../../redux/store'
import { increment, decrement, asyncAction } from '../../redux/count_action';

class Count extends Component {

    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    add = () => {
        const {value} = this.selectNmuber
        store.dispatch(increment(value*1))
    }
    
    deAdd = () => {
        const {value} = this.selectNmuber
        store.dispatch(decrement(value*1))
    }

    addIfOadd = () => {
        const {value} = this.selectNmuber
        const count = store.getState()
        if(count % 2 !== 0){
             store.dispatch(increment(value*1))
        }
    }

    addIfAsync = () => {
        const {value} = this.selectNmuber
        store.dispatch(asyncAction(value*1, 500))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
import React, { Component } from 'react';
import store from '../../redux/store'

class Count extends Component {

    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    add = () => {
        const {value} = this.selectNmuber
        store.dispatch({
            type: 'add',
            data: value*1
        })
    }
    
    deAdd = () => {
        const {value} = this.selectNmuber
        store.dispatch({
            type: 'deAdd',
            data: value*1
        })
    }

    addIfOadd = () => {
        const {value} = this.selectNmuber
        const count = store.getState()
        if(count % 2 !== 0){
            store.dispatch({
                type: 'addIfOadd',
                data: value*1
            })
        }
    }

    addIfAsync = () => {
        const {value} = this.selectNmuber
        setTimeout(() => {
            store.dispatch({
                type: 'addIfAsync',
                data: value*1
            })
        }, 1000)
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
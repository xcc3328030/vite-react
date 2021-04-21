
import { connect } from 'react-redux'
import React, { Component } from 'react';

import { createIncrementAction, createDecrementAction, asyncAction } from '../../redux/actions/count'

// const mapStateToProps = state =>  ({ count: state})
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addNumber: (number: number) => {
//             dispatch(createIncrementAction(number))
//         },
//         deNumber: (number: number) => {
//             dispatch(createDecrementAction(number))
//         },
//         asyncNumber: (number: number, time) => {
//              dispatch(asyncAction(number, time))
//         },
//     }
// }

class Count extends Component {

    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    add = () => {
        const {value} = this.selectNmuber
        this.props.addNumber(value*1)
    }
    
    deAdd = () => {
        const {value} = this.selectNmuber
         this.props.deNumber(value*1)
    }

    addIfOadd = () => {
        const {value} = this.selectNmuber
        if(this.props.count % 2 !== 0){
             this.props.addNumber(value*1)
        }
    }

    addIfAsync = () => {
        const {value} = this.selectNmuber
         this.props.asyncNumber(value*1, 500)
    }

    render() {
        return (
            <div>
                <h1>我是count组件</h1>
                <h4>当前求和为：{this.props.count}</h4>
                <h3>下方人数为：{this.props.renshu}</h3>
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

export default connect(
    state =>  ({ count: state.he, renshu: state.ren.length}), 
    {
        addNumber: createIncrementAction,
        deNumber: createDecrementAction,
        asyncNumber: asyncAction,
    }
)(Count)
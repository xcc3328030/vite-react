import React, { Component } from 'react';

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
                <h1>当前求和为：{this.props.count}</h1>
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
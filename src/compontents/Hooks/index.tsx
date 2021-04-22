import React, { Component } from 'react';

// class Hooks extends Component {

//     state = {count: 0}

//     add=() => {
//       this.setState(state=> ({count: state.count+1}))  
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hooks</h1>
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
//         );
//     }
// }

function Hooks (){
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('xcc')

    function add () {
        // setCount(count+1)
        setCount(value => value+1)
    }

   function changeName () {
         setName('1111')
    }

    return (
        <div>
            <h1>Hooks</h1>
            <h2>当前求和为：{count}</h2>
            <h2>我的名字：{name}</h2>
            <button onClick={add}>点我+1</button>
             <button onClick={changeName}>改变名字</button>
        </div>
    )
}

export default Hooks;
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPersonAction } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const obj = { id: nanoid(), name, age}
        this.props.jiayiren(obj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h1>我是Person组件</h1>
                <h2>上方求和为：{this.props.qiuhe}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字" />
                &nbsp;<input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄" />
                &nbsp;<button onClick={this.addPerson}>添加</button>
                <ul>
                    
                    {
                        this.props.persons.map(item => {
                            return <li key={item.id}>名字{item.name} --- 年龄 {item.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({persons: state.ren, qiuhe: state.he }),
    {
        jiayiren: addPersonAction
    }
)(Person)
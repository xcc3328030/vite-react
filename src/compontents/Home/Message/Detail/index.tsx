import React, { Component } from 'react';
import qs from 'querystring'

class Detail extends Component {

    state = {
        data:[
            {id: '1', content: 'xxxxxxxx'},
            {id: '2', content: 'yyyyyyy'},
        ]
    }
       
    render() {
        // params 路由传参
        // const {id, name} = this.props.match.params

        // search传参
       const { search } = this.props.location
       const {id, name} = qs.parse(search.slice(1))


        let obj = this.state.data.find(item=> {
            return item.id === id
        })
        return (
            <div>
                <li>id: {id}</li>
                <li>name: {name}</li>
                <li>content: {obj.content}</li>
            </div>
        );
    }
}

export default Detail;
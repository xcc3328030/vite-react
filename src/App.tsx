import React, { Component } from 'react'
import Header from './compontents/Header'
import List from './compontents/List'
import Footer from './compontents/Footer'
import './index.css'

  interface Todo {
    id: number
    name: string
    isdo: boolean
}
class App extends Component {
 
    // // react
    // const [todos] = useState<Todo[]>([]);

    // // 初始化
    // useEffect(() => {
    // // 获取业务类型
    //     const todos: ContentTableBizType[] = [
    //         { id: 1,name: '吃饭', isdo: true },
    //             { id: 2,name: '睡觉', isdo: true },
    //             { id: 3,name: '打代码', isdo: false },
    //         ];
    // }, [])

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
               <div className="todo-wrap">
                    <Header />
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
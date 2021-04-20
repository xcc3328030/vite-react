import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store.js'

ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
  document.getElementById('root')
)

store.subscribe(()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    document.getElementById('root')
    )
})

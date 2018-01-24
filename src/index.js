import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ExampleApp from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<ExampleApp />, document.getElementById('root'))
registerServiceWorker()

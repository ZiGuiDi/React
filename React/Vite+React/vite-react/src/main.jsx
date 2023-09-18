import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import store from './rudex/store.js'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* Provider可以将store传入所有的子组件 */}
    <Provider store={store} > <App /></Provider>
  </React.StrictMode>,
)


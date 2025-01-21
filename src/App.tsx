import React from 'react'
import Routes from './router/routes'
import {Provider} from "react-redux"
import {store} from "./components/services/store"
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export default App
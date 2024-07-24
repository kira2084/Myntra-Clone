import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import './index.css'
import Bag from "./router/Bag.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './router/Home.jsx'
import Myntrastore from './store/index.js'
import { Provider } from 'react-redux'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/bag",element:<Bag/>},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Myntrastore}>
    <RouterProvider router={router}/>
    </Provider>
    
   
  </React.StrictMode>,
)

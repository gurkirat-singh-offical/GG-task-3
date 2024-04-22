import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Scorer from './pages/Scorer.jsx'
import Viewer from './pages/Viewer.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Login/>
      },
      {
        path:"scorer",
        element:<Scorer/>
      },
      {
        path:"viewer",
        element:<Viewer/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

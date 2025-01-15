import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about.jsx'
const router = createBrowserRouter([
  {
    path : '/' ,
element : <Layout/> ,
children : [
  {
    path : '',
    element : <Home/> ,
  },
  {
    path : 'about',
    element : <About/> ,
  }
]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

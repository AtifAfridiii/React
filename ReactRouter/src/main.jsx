import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about.jsx'
import User from './Components/User/user.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
import Contact from './Components/Contact/Contact.jsx'
// const router = createBrowserRouter([
//   {
//     path : '/' ,
// element : <Layout/> ,
// children : [
//   {
//     path : '',
//     element : <Home/> ,
//   },
//   {
//     path : 'about',
//     element : <About/> ,
//   },
//   {
//     path : 'user/:userid',
//     element : <User/> ,
//   }
  
// ]
//   }
// ])
const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

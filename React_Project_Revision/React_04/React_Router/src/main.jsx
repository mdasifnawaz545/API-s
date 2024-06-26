import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'
import Layout from './components/Layout.jsx'
import NotFound from './components/NotFound.jsx'
import User from './components/User.jsx'
import {githubInfos} from './components/Github.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/", element: <Layout />, children: [
//         { path: "/", element: <Home /> },
//         { path: "about", element: <About /> },
//         { path: "contact", element: <Contact /> },
//         { path: "github", element: <Github /> }
//       ]
//     },
//     { path: "*", element: <NotFound/> }

//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} loader={githubInfos}/>
      <Route path='user/:query' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

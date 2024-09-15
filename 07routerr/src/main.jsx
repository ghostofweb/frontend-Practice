import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import {Github , Githubinfo} from './components/Github/Github.jsx'

// const router  = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//       path:"",
//       element:<Home/> // these changes will come in the outlet, depending on the page user choose to go
//       },
//       {
//         path:"about", // now on http://localhost:5173/about, we will see the about page in middle with header and footer
//         // the layout which we created using outlet
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// The other way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path = '' element={<Home/>}/>
    <Route path = 'about' element={<About/>}/>
    <Route path = 'contact' element={<Contact/>}/>
    <Route path = 'user/:id' element={<User/>}/>
    <Route path = 'github' element={<Github/>} loader={Githubinfo}/>

    {/* :id is very imp as we fetch data based on it */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
    {/* need to make router */}
  </StrictMode>,
)

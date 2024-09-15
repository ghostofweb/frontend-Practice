# Routing, Nav Links and Links

Link : used instead of "< a >" tag, whenever we make changes in a tag, the whole page gets refresh
in React, the dom gets replace, not the whole page
```javascript
<Link to="">
```


## changes in main.jsx now
so using router component of react, we will make changes in the main.jsx

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
    {/* need to make router */}
  </StrictMode>,
)
```
###### here this is used to provide routing to the router

then we need to create a layout on how we want to see the page

so we created new jsx named Layout where we have Outlet from react router
Outlet is the tag which can be changed and header and footer will reamin same

```javascript 
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
```

```javascript
const router  = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
      path:"",
      element:<Home/> // these changes will come in the outlet, depending on the page user choose to go
      },
      {
        path:"about", // now on http://localhost:5173/about, we will see the about page in middle with header and footer
        // the layout which we created using outlet
        element:<About/>
      }
    ]
  }
])
```
## OR

```javascript
// The other way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path = '' element={<Home/>}/>
    <Route path = 'about' element={<About/>}/>
    <Route path = 'contact' element={<Contact/>}/>
    </Route>
  )
)
```

and then in the main.jsx we can make the router like this

now we can route that using to="/somewhere" in the links
```javascript
<li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3
                                         duration-200 ${isActive ? "text-green-700":"text-orange-700"}border-b
                                         border-gray-100
                                     hover:bg-gray-50 lg:hover:bg-transparent
                                        lg:border-0 hover:text-orange-700
                                        lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3
                                         duration-200 ${isActive ? "text-green-700":"text-orange-700"}border-b
                                         border-gray-100
                                     hover:bg-gray-50 lg:hover:bg-transparent
                                        lg:border-0 hover:text-orange-700
                                        lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
```

# URL for the User
```javascript
<Route path = 'user/:id' element={<User/>}/>
```
and in the main component User, we need to get the params id using 
useParams

```javascript

import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()

  return (
    <div>User : {id}</div>
  )
}

export default User
```

## Loader
```javascript
<Route path = 'github' element={<Github/>} loader/>
```
#### What is Loader ?

Taking API calls and doing some operations even before clicking to the button

we need to make the function of it in the same file, and then export it to main file
then puting that function to the loader, and then use 
```javascript
import { useLoaderData } from 'react-router-dom'
```

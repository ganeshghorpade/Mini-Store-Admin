import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Products from './pages/Products/Products.jsx'
import Orders from './pages/Orders/Orders.jsx'
import Users from './pages/Users/Users.jsx'
import Settings from './pages/Setting/Settings.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="Orders" element={<Orders/>}/>
      <Route path="Users" element={<Users/>}/>
      <Route path="Settings" element={<Settings/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)

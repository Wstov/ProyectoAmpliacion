import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Layout from './components/Layout'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'



const router = createBrowserRouter([
 {
  path:'/',
  element:<Layout/>,
  children:[
    {
      index: true,
      element: <Inicio />
    },
    {
      path:'/tiendadevideojuegos/nosotros',
      element:<Nosotros/>
     },
     {
      path:'/tiendadevideojuegos/contacto',
      element:<Contacto/>
     }
  ]

}
 

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Nosotros from './pages/Nosotros'
import Contacto, { action as nuevoContacto } from './pages/Contacto'
import Inicio from './pages/Inicio'
import Descripcion from './components/Descripcion'
import Base from './components/Base'




const router = createBrowserRouter([
  {
    path: '/descripcion',
    element: <Descripcion/>,

  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />
      },
      {
        path: '/tiendadevideojuegos/nosotros',
        element: <Nosotros />
      },
      {
        path: '/tiendadevideojuegos/contacto',
        element: <Contacto />,
        action: nuevoContacto,
      }
    ]
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

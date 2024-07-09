import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CreateUser from "./components/CreateUser"
import Login from "./components/Login"
import MenuPrincipal from './components/MenuPrincipal'
import Consultar from './components/Consultar'
import Alterar from './components/Alterar'
import Adicionar from './components/Adicionar'
import Deletar from './components/Deletar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateUser />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'menu',
    element: <MenuPrincipal />
  },
  {
    path: 'menu/consultar',
    element: <Consultar />
  },
  {
    path: 'menu/alterar',
    element: <Alterar />
  },
  {
    path: 'menu/adicionar',
    element: <Adicionar />
  },
  {
    path: 'menu/deletar',
    element: <Deletar />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
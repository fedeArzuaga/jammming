import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Jamming from './Jamming'
import { GetPermissionsPage } from './components/GetPermissionsPage/GetPermissionsPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <Jamming /> } />
            <Route path="/get-permissions" element={ <GetPermissionsPage /> } />
        </>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)

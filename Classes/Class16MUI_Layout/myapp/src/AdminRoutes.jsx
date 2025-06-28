import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutPage from './Pages/LayoutPage'

function AdminRoutes() {
  return (
   <LayoutPage>
       <Outlet/>      
   </LayoutPage>

  )
}

export default AdminRoutes

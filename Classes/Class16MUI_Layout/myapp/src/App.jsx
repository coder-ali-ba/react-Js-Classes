import { useState } from 'react'
import './App.css'
import LayoutPage from './Pages/LayoutPage'
import { Route, Router, Routes } from 'react-router-dom'
import AdminDashboard from './Pages/AdminPages/AdminDashboard'
import Allusers from './Pages/AdminPages/Allusers'
import Allblogs from './Pages/AdminPages/Allblogs'
import AdminRoutes from './AdminRoutes'

function App() {

 
  <Routes>
    <AdminRoutes>
      <Route path='/admindashboard' element={<AdminDashboard />}></Route>
      <Route path='/allusers' element={<Allusers />}></Route>
      <Route path='/allblogs' element={<Allblogs />}></Route>
    </AdminRoutes>
  </Routes>




  return (
    <>
     <LayoutPage />
    </>
  )
}

export default App

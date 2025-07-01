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
     <Route element={<AdminRoutes />}>
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/allusers" element={<Allusers />} />
        <Route path="/allblogs" element={<Allblogs />} />
        <Route index element={<AdminDashboard />} /> {/* Default page */}
      </Route>
  </Routes>




  return (
    <>
      <AdminRoutes />
    </>
  )
}

export default App

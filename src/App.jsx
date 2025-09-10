import React from 'react'
import AdminPage from './pages/admin/AdminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <BrowserRouter>
      <Toaster 
      position='top-right'
      />
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<HomePage />} />
        <Route path='/admin/*' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>



  )
}

export default App;
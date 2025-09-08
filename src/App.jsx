import React from 'react'
import AdminPage from './pages/admin/AdminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage';



function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
    

  
  )
}

export default App;
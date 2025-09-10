import React from 'react'
import Header from '../../components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import { FcGallery } from 'react-icons/fc'
import Items from './Items'
import ErrorPage from './ErrorPage'
import Gallery from './Gallery'

function HomePage() {
  return (
    <div>
       <Header/>
       <div className='w-full h-[calc(100vh-5em)] flex justify-center items-center'>
        <Routes>
          
            <Route path='/' element={<Home/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/items' element={<Items/>}/>
            

        </Routes>
       </div>
    </div>
  )
}

export default HomePage
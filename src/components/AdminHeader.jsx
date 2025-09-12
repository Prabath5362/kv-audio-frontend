import React from 'react'

    ;
import { Link } from 'react-router-dom';
import logo from "/logo.png"

function AdminHeader() {
    return (
        <header className='min-w-full h-[4em] bg-gray-900 flex justify-between items-center p-4 text-gray-300 font-bold text-sm relative'>
           


                <img className='  h-22 w-22 object-cover absolute left-4' src={logo} alt="" />


                <h1 className='absolute right-4'>KV AUDIO ADMIN</h1>
           
      
        </header>
    )
}

export default AdminHeader
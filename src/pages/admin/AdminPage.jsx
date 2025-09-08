import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import React, { useState } from 'react'
function AdminPage() {
    const [isMenuClick, setIsMenuClick] = useState(false);

    function SideBarChange() {
        setIsMenuClick(!isMenuClick);
    }
    return (
        <div className='w-full h-screen bg-gray-100'>
            <Header SideBarChange={SideBarChange} />

            <div className='w-full h-[calc(100vh-5em)] flex '>

                <SideBar/>

                <div className='flex justify-center items-center bg-gray-200 w-full'>
                    <Routes>
                        <Route path='/' element={<h1>Dashboard page under development</h1>}/>
                        <Route path='/bookings' element={<h1>Booking page under development</h1>}/>
                        <Route path='/items' element={<h1>Items page under development</h1>}/>
                        <Route path='/help' element={<h1>Helps page under development</h1>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
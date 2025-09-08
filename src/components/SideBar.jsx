import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { FaUser } from "react-icons/fa";



function SideBar() {
return (
    <div className='w-80 h-full border-t-3 border-t-gray-500 bg-gray-900 text-[#d4d0d0] font-bold text-sm flex flex-col items-start p-4 gap-3'>
        <div className='flex justify-start items-center gap-3 border-b-2 w-full pb-2'>
            <MdDashboard className='text-lg text-white' />
            <span>Dashboard</span>
        </div>
        <div className='flex justify-start items-center gap-3 border-b-2 w-full pb-2'>
            <i className="fa-solid fa-ticket text-white text-lg"></i>
            <span>Booking</span>
        </div>
        <div className='flex justify-start items-center gap-3 border-b-2 w-full pb-2'>
            <AiFillSound className='text-lg text-white' />
            <span>Item</span>
        </div>
        <div className='flex justify-start items-center gap-3 border-b-2 w-full pb-2'>
            <FaUser className='text-lg text-white' />
            <span>User</span>
        </div>
        <div className='flex justify-start items-center gap-3 border-b-2 w-full pb-2'>
            <i className="fa-solid fa-handshake-angle text-white text-lg"></i>
            <span>Help</span>
        </div>
    </div>
)
}

export default SideBar
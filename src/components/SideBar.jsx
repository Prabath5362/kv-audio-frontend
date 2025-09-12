import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';



function SideBar() {
return (
    <div className='w-70 min-h-full border-t-3 border-t-gray-500 bg-gray-900 text-[#d4d0d0] font-bold text-sm flex flex-col items-start p-4 gap-3'>
        <Link className='border-b-2 w-full pb-2' to="/admin"><div className='flex justify-start items-center gap-3 '>
            <MdDashboard className='text-lg text-white' />
            <span>Dashboard</span>
        </div></Link>


        <Link className='border-b-2 w-full pb-2' to="/admin/bookings">
        <div className='flex justify-start items-center gap-3 '>
            <i className="fa-solid fa-ticket text-white text-lg"></i>
            <span>Booking</span>
        </div>
        </Link>


        <Link className='border-b-2 w-full pb-2' to="/admin/items"><div className='flex justify-start items-center gap-3 '>
            <AiFillSound className='text-lg text-white' />
            <span>Item</span>
        </div></Link>
        <Link className='border-b-2 w-full pb-2' to="/admin/users">
        <div className='flex justify-start items-center gap-3 '>
            <FaUser className='text-lg text-white' />
            <span>User</span>
        </div>
        </Link>
      
    </div>
)
}

export default SideBar
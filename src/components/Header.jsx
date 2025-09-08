import React from 'react'

    ;
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='w-full h-[4em] bg-gray-900 flex justify-center items-center p-4 text-gray-300 font-bold text-sm relative'>


                <img className='  h-22 w-22 object-cover absolute left-4' src="./logo.png" alt="" />


                <div className='w-[30%] flex justify-center items-center gap-10 absolute right-4'>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/items">Items</Link>
                </div>
            </div>
            <div className='w-full h-[1em] bg-gray-800 '>

            </div>
        </header>
    )
}

export default Header
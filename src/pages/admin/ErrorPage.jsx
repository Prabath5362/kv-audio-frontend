import React from 'react'
import { Link } from 'react-router-dom';

function ErrorPage() {
return (
    <div className='w-full h-screen bg-gray-100 flex flex-col justify-center items-center font-bold text-3xl text-gray-400 gap-6 '>
        Error 404! page not found
        <Link
            className='text-gray-800 border-2 border-gray-800 rounded-2xl px-4 py-2 duration-[3000ms] hover:translate-x-5'
            to='/'
        >
            Go to Home
        </Link>
    </div>
)
}

export default ErrorPage
import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/api/user/login', { email, password }).then((res) => {
      toast.success("Login Successful")
      localStorage.setItem("token",res.data.token);
      setTimeout(() => {
        if (res.data.role === 'admin') {
          navigate("/admin");
        } else {
          navigate("/")
        }
      }, 2000)


    }
    ).catch((err) => {
      toast.error(err.response.data.message)
    })
  }
  return (

    <div className='w-full min-h-screen bg-picture flex ' >


      <form className='w-[400px] h-[400px] backdrop-blur-md m-auto rounded-2xl flex flex-col items-center justify-center relative' onSubmit={login}>
        <div className='w-[400px] h-[400px] backdrop-blur-md m-auto rounded-2xl flex flex-col items-center justify-center relative'>

          <img className=' mt-[-20px] w-[150px] object-cover absolute top-0' src="./logo.png" alt="" />

          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Username' className='w-3/4 p-2 mt-[10px] mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white' />

          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='w-3/4 p-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white' />

          <button className='w-3/4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'>Login</button>

        </div>
      </form>
    </div>

  )
}

export default Login
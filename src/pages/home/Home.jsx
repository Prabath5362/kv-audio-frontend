import React from 'react'

function Home() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);  
  }

  return (

      <div className='w-full h-[100vh-5em] flex flex-col justify-center items-center font-bold  text-gray-400'>
        <h1 className='text-6xl'>{count}</h1>
        <button onClick={handleClick} className='bg-blue-600 rounded-3xl shadow-lg px-4 py-2 hover:scale-105 duration-300 cursor-pointer mt-4 text-amber-50'>Count</button>
      </div>


  )
}

export default Home
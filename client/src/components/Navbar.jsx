import React from 'react'
import { Link } from 'react-router-dom'

// 

const Navbar = () => {
  return (
    <div className='absolute top-0 left-[50%] transform -translate-x-1/2 max-w-[1440px] w-full h-[120px] flex justify-between items-center text-black bg-transparent lg:px-[80px]'>
      <Link to="/" className='text-4xl lg:text-5xl font-extrabold'> 
        <span className='text-[#0D9A05]'>3<span className='text-[#D3A304]'>rees</span></span> 
      </Link>
      <ul className='w-[25%] flex justify-between items-center mx-3 text-lg'>
        <li>
          <Link to="/">
            <span>Link</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Link</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Link</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className='border px-2 border-black cursor-pointer rounded-md'>Explore</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import {FaArrowAltCircleUp,FaShoppingCart,FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Topbar = () => {
  return (
    <div className='flex justify-between bg-redC w-[100] h-14 text-[#fff] '>
      <Link to={`/`}><FaArrowAltCircleUp className='w-14 h-8 mt-3' /></Link> 
      <div className='flex mt-3 mr-4 cursor-pointer'>
      <FaShoppingCart className='mt-1 mr-1'/> <Link to={`/cart`}><p className='pr-2'>Cart |</p></Link>
       <FaUser className='mt-1 mr-1'/><Link to={`/login`}><p className='pr-2'>LogIn |</p></Link>
            <p className='pr-2'>SignIn</p>
            </div>
    </div>
  )
}

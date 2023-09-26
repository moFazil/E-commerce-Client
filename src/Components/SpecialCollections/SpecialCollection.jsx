import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import error from '../SpecialCollections/Images/error404.jpg'

const SpecialCollection = () => {
  
  return (
    <div>
      <div className='flex justify-center my-5'>
        <Link to={`/`}><button className=' bg-redC text-gray-100 font-semibold py-2 px-4 rounded-md hover:bg-red-700'>Go Back To Home Page</button></Link>
      </div>
      <img src={error} alt="" className='my-12'/>
      
        <Outlet/>
    </div>
  )
}

export default SpecialCollection
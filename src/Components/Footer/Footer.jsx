import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
        <footer className='bg-redC '>
          <div className='flex justify-between text-[#fff] px-20 pt-10'>
          <div className=' flex flex-col justify-center text-start'>
            <h1 className=' font-extrabold text-2xl ml-3 '>ShopNow</h1>
          <Link to={`/men`}><p className=' p-4 font-bold '>Men</p></Link>
          <Link to={`/women`}><p className=' p-4 font-bold '>Women</p></Link>
          <Link to={`/footwear`}><p className=' p-4  font-bold'>Footwear</p></Link>
          <Link to={`/bags`}><p className=' p-4  font-bold'>Bags</p></Link>
          </div>
         
          <div className=' text-start flex flex-col justify-center'>
            <p>Contact Us</p>
            <p>Need help? Get in touch with us and </p>
            <p>we'll be more than happy to guide you through!</p>

            <div className=' py-5 font-bold'>
              <Link to={`/`}><p>fazelcm2000@gmail.com</p></Link>
              <p>1800 183 3575</p>
            </div>
            <div className=' py-5'>
              <p>Service Reps are available for inquiries<br/>
                 Monday to Friday from 10AM to 6PM.</p>
            </div>
          </div>
          
          </div>
          <div className=' flex justify-center text-[#fff] pb-5'>
          <p className=' text-2xl pt-12 cursor-pointer'> 
          &copy; {currentYear} Foot Print, Inc. All Rights Reserved</p>
          </div>
        </footer>

  )
}

export default Footer
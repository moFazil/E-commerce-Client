import React from 'react'
import { Outlet } from 'react-router-dom'
import design from '../Bags/Images/bagdesign.png'


const Bags = () => {
  const bags =[
    {
      images: require('../Bags/Images/schoolbag.jpg'),
      name : "BuyNow"
  },
  {
    images :require('../Bags/Images/leather.jpg'),
    name : "BuyNow"
  },
  {
    images :require('../Bags/Images/Backpack.jpeg'),
    name : "BuyNow"
  },
  {
    images :require('../Bags/Images/duffel.jpeg'),
    name : "BuyNow"
  },
  {
    images :require('../Bags/Images/wallet.jpg'),
    name : "BuyNow"
  },
  {
    images :require('../Bags/Images/handbag.png'),
    name : "BuyNow"
  }
  ]
  return (
    <div>
      <div className=' mt-16 mx-11'>
        <img src={design} alt="" />
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 mt-16 gap-12'>

    {
      bags.map((e)=>(
        <div className='w-[250px] h-[250px]  relative mx-5 px-6'>
        <img src={e.images} alt="" className=' w-full h-full pb-5 rounded'/>
        <span className='absolute left-8 bottom-8 text-gray-100 bg-redC font-extrabold px-3 py-1 rounded-full cursor-pointer hover:bg-red-700'>{e.name}</span>
        </div>
      ))
    }
      <Outlet/>
  </div>
  </div>
  )
}

export default Bags
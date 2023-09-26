import React from 'react'
import { Outlet } from 'react-router-dom';
import design from '../Footwear/Images/con.jpg'

const Footwear = () => {
  const footwear =[
    {
      images: require('../Footwear/Images/boot.jpeg'),
      name : "BuyNow"
  },
  {
    images :require('../Footwear/Images/casual.jpeg'),
    name : "BuyNow"
  },
  {
    images :require('../Footwear/Images/fashion.jpeg'),
    name : "BuyNow"
  },
  {
    images :require('../Footwear/Images/formal.jpg'),
    name : "BuyNow"
  },
  {
    images :require('../Footwear/Images/sports.jpg'),
    name : "BuyNow"
  },
  {
    images :require('../Footwear/Images/leather.jpeg'),
    name : "BuyNow"
  }
  ]
  return (
    <div>
      <div className=' mt-16 mx-11'>
        <img src={design} alt="" />
      </div>
    <div className='grid grid-cols-3 mt-16 gap-12'>
      {
        footwear.map((d)=>(
          <div className='w-[250px] h-[250px]  relative mx-5 px-6'>
          <img src={d.images} alt="" className=' w-full h-full object-cover pb-5 rounded-lg'/>
          <span className='absolute left-8 bottom-8 text-gray-100 bg-redC font-extrabold px-3 py-1 rounded-full cursor-pointer hover:bg-red-700'>{d.name}</span>
          </div>
        ))
      }
        <Outlet/>
    </div>
    </div>
  )
}

export default Footwear
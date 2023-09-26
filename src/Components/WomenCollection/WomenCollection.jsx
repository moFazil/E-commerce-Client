import React from 'react'
import { Outlet } from 'react-router-dom'
import design from '../WomenCollection/Images/womendesign.png'

const WomenCollection = () => {
  const womenSection=[
    {
      images: require('../WomenCollection/Images/shirt.jpg'),
      name : "BuyNow"
  },
  {
    images :require('../WomenCollection/Images/tshirtwomen.jpg'),
    name : "BuyNow"
  },
  {
    images :require('../WomenCollection/Images/hoodie.jpg'),
    name : "BuyNow"
  },
  {
    images :require('../WomenCollection/Images/jacket.jpg'),
    name : "BuyNow"
  },
]
  return (
    <div>
    <div className=' mt-16 mx-11'>
      <img src={design} alt="" />
    </div>
  
  <div className='grid grid-cols-3 mt-16 gap-12'>

  {
    womenSection.map((c)=>(
      
      <div className='w-[250px] h-[250px]  relative mx-5 px-6'>
      <img src={c.images} alt="" className=' w-full h-full object-cover pb-5 rounded-lg'/>
      <span className='absolute left-8 bottom-8 text-gray-100 bg-redC font-extrabold px-3 py-1 rounded-full cursor-pointer hover:bg-red-700'>{c.name}</span>
      </div>
    ))
  }
    <Outlet/>
</div>
</div>
  )
}

export default WomenCollection
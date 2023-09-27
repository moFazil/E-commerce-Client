import React from 'react'
import { Outlet } from 'react-router-dom'
import design from '../MenCollection/Images/mendesign.png'

const Mencollection = () => {
const mensSection =[
  {
    images: require('../MenCollection/Images/menShirt.jpg'),
    name : "BuyNow"
},
{
  images :require('../MenCollection/Images/tshirtmen.jpg'),
  name : "BuyNow"
},
{
  images :require('../MenCollection/Images/hoodie.jpg'),
  name : "BuyNow"
},
{
  images :require('../MenCollection/Images/jacket.jpg'),
  name : "BuyNow"
},
{
  images :require('../MenCollection/Images/Shorts.webp'),
  name : "BuyNow"
}
]

  return (
    <div>
      <div className=' mt-16 mx-11'>
        <img src={design} alt="" />
      </div>
    
    <div className='grid grid-cols-1 mt-16 gap-12 mx-5 sm:grid-cols-2'>

      {
        mensSection.map((b)=>(
          <div className='w-[250px] h-[250px]  relative mx-5 px-6'>
          <img src={b.images} alt="" className=' w-full h-full object-cover pb-5 rounded-lg'/>
          <span className='absolute left-8 bottom-8 text-gray-100 bg-redC font-extrabold px-3 py-1 rounded-full cursor-pointer hover:bg-red-700'>{b.name}</span>
          </div>
        ))
      }
        <Outlet/>
    </div>
    </div>
  )
}

export default Mencollection
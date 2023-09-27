import React from 'react'
import { Link } from 'react-router-dom'


export const Content = () => {
  const images = [
    {
      id:1,
      image : require('../Content/images/men.webp'),
      name : "MEN",
      path : `/men`,
    },
    {
      id:2,
      image : require('../Content/images/women.webp'),
      name : "WOMEN",
      path :`/women`,
    },
    {
      id:3,
      image : require('../Content/images/footwear.webp'),
      name : "FOOTWEAR",
      path :`/footwear`,
    },
    {
      id:4,
      image : require('../Content/images/bags.webp'),
      name : "BAGS",
      path : `/bags`,
    },
  ]
  const content_img = [
    {
      id:5,
      image : require('../Content/images/con-2.webp'),
      name : 'Shop Now',
      path : `collection`,
    }
  ]
  return (
    <div className=' mt-16 mx-11' >
        <img src={require("../Content/images/Content.png")} alt="" />

        <div className=' my-20 px-10 grid md:grid-cols-2 grid-rows-2 gap-20 grid-cols-1'>
      {
        images.map((i)=>(
          <div key={i.id} className='w-[200px] h-[200px]  relative mx-5'>
          <img src={i.image} alt="" className='w-full h-full object-cover rounded-full hover:shadow-2xl' />
          <Link to={i.path}>
          <span className='absolute left-10 bottom-5 text-gray-100 font-extrabold border-2 border-white-600/50 px-2 py-1 rounded-full cursor-pointer hover:bg-slate-100 hover:text-black'>
            {i.name}</span>
          </Link>
          </div>
        )) 
      }
    </div>
    <div className=' my-20'>
    {
      content_img.map((a)=>(
        <div className=' relative'>
          <img src={a.image} alt="" className='w-full object-cover h-full' />
          <Link to={a.path}>
          <span className=' absolute bottom-4 bg-redC text-slate-100 px-6 py-2 font-bold rounded hover:bg-red-800 cursor-pointer'>
            {a.name}</span></Link>
        </div>
      ))
    }

  </div>
    </div>
  )
}

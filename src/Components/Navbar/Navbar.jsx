import React, {useState} from "react";
import { Link } from "react-router-dom";

let Navbar=()=>{

  const [isMensOpen, setIsMensOpen] = useState(false);
  const [isWomensOpen, setIsWomensOpen] = useState(false);
  const [isFootwearOpen, setIsFootwearOpen] = useState(false);
  const [isBagsOpen, setIsBagsOpen] = useState(false);

  const toggleMens = () => {
    setIsMensOpen(!isMensOpen);
  };

  const toggleWomens = () => {
    setIsWomensOpen(!isWomensOpen);
  };

  const toggleFootwear = () => {
    setIsFootwearOpen(!isFootwearOpen);
  };
  const toggleBags = () => {
    setIsBagsOpen(!isBagsOpen);
  };


  return(

    <div className='flex justify-around py-2'>

        
          <div
            className={`Mens ${isMensOpen ? "open" : ""}`} 
            onMouseEnter={toggleMens}
            onMouseLeave={toggleMens}
          >
          <Link to={`/men`}><p className='px-5 py-2 font-semibold'>Men</p></Link>


            {isMensOpen && (
              <div className=" absolute bg-[#F5F5F5] flex text-left justify-evenly w-full py-8 left-0 z-10">
                  <div className="p-3 hidden sm:block">
                     <h1 className=" my-2 font-semibold text-base cursor-pointer">New & Men</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">New Arrivals</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Latest Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Member Exclusive</p>
                  </div>

                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">New for Men</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Accessories</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Shop All New</p>

                  </div>
                  
                  <div className="p-3 ">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">New for Women</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Accessories</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Shop All New</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">New for Kids</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Accessories</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Shop All New</p>

                  </div>
              </div>
            )}
          </div>

          <div
            className={`Womens ${isWomensOpen ? "open" : ""}`} 
            onMouseEnter={toggleWomens}
            onMouseLeave={toggleWomens}
          >
         <Link to={`/women`}><p className='px-5 py-2 font-semibold'>Women</p></Link>


            {isWomensOpen && (
              <div className=" absolute bg-[#F5F5F5]  flex text-left justify-evenly w-full py-8 left-0 z-10">
                  <div className="p-3 hidden sm:block">
                     <h1 className="my-2 font-semibold text-base cursor-pointer">Mens</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">New Releases</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Member Exclusive</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Last Sizes Available</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Back to Office</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sustainable Materials</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sale</p>
                  </div>

                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sneakers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shop by Sport</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Running</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Football</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Tennis</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Skateboarding</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Gym and Traing</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Yoga</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Golf</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Accessories & Equipment</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">All Accessories & Equipment</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Bags and Backpacks</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Socks</p>

                  </div>
              </div>
            )}
          </div>

          <div
            className={`Footwear ${isFootwearOpen ? "open" : ""}`} 
            onMouseEnter={toggleFootwear}
            onMouseLeave={toggleFootwear}
          >
                    <Link to={`/footwear`}><p className='px-5 py-2 font-semibold'>Footwear</p></Link>

            {isFootwearOpen && (
              <div className=" absolute bg-[#F5F5F5]  flex text-left justify-evenly w-full py-8 left-0 z-10">
                  <div className="p-3 hidden sm:block">
                     <h1 className="my-2 font-semibold text-base cursor-pointer">Mens</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">New Releases</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Member Exclusive</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Last Sizes Available</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sustainable Materials</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sale</p>
                  </div>

                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Shop by Sport</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Football</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Tennis</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Gym and Traing</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Yoga</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Golf</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Accessories & Equipment</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">All Accessories & Equipment</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Bags and Backpacks</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Socks</p>

                  </div>
              </div>
            )}
          </div>

          <div
            className={`Bags ${isBagsOpen ? "open" : ""}`} 
            onMouseEnter={toggleBags}
            onMouseLeave={toggleBags}
          >
                  <Link to={`/bags`}><p className='px-5 py-2 font-semibold'>Bags</p></Link>

            {isBagsOpen && (
              <div className=" absolute bg-[#F5F5F5]  flex text-left justify-evenly w-full py-8 left-0 z-10">
                  <div className="p-3 hidden sm:block">
                     <h1 className="my-2 font-semibold text-base cursor-pointer">Mens</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">New Releases</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Best Sellers</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Member Exclusive</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Last Sizes Available</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Back to School</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sale</p>
                  </div>

                  <div className="p-3">

                     <h1 className=" my-2 font-semibold text-base cursor-pointer">Boy's Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Girl's Shoes</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">All Shoes</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Lifestyle</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Sandals & Slides</p>

                  </div>
                  
                  <div className="p-3">

                     <h1 className="my-2 font-semibold text-base cursor-pointer">Kids by Age</h1>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Older Kids (7 - 14 Years)</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Younger Kids (4 - 7 Years)</p>
                     <p className=" text-gray-500 text-base cursor-pointer hover:underline hover:text-black">Babies & Toddlers (0 - 4 Years)</p>

                  </div>
                  
              </div>
            )}
          </div>
      
          <div className=' hidden md:block'>
             <input type="search" placeholder='Search' className='border-2 border-slate-400/50 w-[230px] h-9 pl-3 outline-none rounded'/>
      </div>
      </div>
)}

export default Navbar; 

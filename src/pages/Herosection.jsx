import React from 'react'
import banner from "../images/banner.jpg"
function Herosection() {
  return (
    <div className='h-2/3 relative mb-8'>
    <img className='object-cover object-center h-[32rem] md:h-full w-full md:w-auto' src={banner} alt='banner' />
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-white'>Kerala's Leading Web Design Company</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white">Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</p>
    </div>
  </div>
  

  
  )
}

export default Herosection
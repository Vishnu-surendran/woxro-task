import React from 'react'
import webdesigning  from "../images/webdesigning.png"
import webapplication from "../images/webapplication.png"

import mobiledevelop from "../images/mobileappdevelopment.png"
import ecommerce from "../images/ecommercedevelopment.png"
import digitamarket from "../images/digitalmarketing.png"
import graphicdesign from "../images/graphic.png"
function Servicesection() {
  return (
    <div className="py-16 ">  
     <h3 className='text-center pb-6 font-bold text-zinc-600'>SERVICES WE DELIVER</h3> 
        <h2 className='text-center font-bold text-5xl pb-11'>Preparing for your success, we provide truly prominent IT solutions.</h2>
    <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-emerald-300 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:drop-shadow-lg cursor-pointer">
                <div className="mb-12 space-y-4 ">
                <img src={webdesigning} alt='web designing' className=" mr-auto mb-6 block"  />
                <h3 className="text-2xl font-semibold text-black">Web Designing</h3>   
                    <p className="mb-6">We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>             
                </div>
                
            </div>
            <div className="bg-yellow-200 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:drop-shadow-lg cursor-pointer">
                <div className="mb-12 space-y-4 ">
                <img src={webapplication} alt='webapplication' className=" mr-auto mb-6 block"  />
                <h3 className="text-2xl font-semibold text-black">Web Application</h3>   
                    <p className="mb-6">We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.</p>             
                </div>
                
            </div>
            <div className="bg-orange-300 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:drop-shadow-lg cursor-pointer">
                <div className="mb-12 space-y-4 ">
                <img src={mobiledevelop} alt='mobiledevelopment' className=" mr-auto mb-6 block"  />
                <h3 className="text-2xl font-semibold text-black">Mobile Web Development</h3>   
                    <p className="mb-6">We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.</p>             
                </div>
                
            </div>
            <div className="bg-red-400 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:drop-shadow-lg cursor-pointer">
                <div className="mb-12 space-y-4 ">
                <img src={ecommerce} alt='ecommerce' className=" mr-auto mb-6 block"  />
                <h3 className="text-2xl font-semibold text-black">Ecommerce Development</h3>   
                    <p className="mb-6">For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.</p>             
                </div>
                
            </div>
            <div className="bg-blue-400 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:drop-shadow-lg cursor-pointer">
                <div className="mb-12 space-y-4 ">
                <img src={digitamarket} alt='Digital Marketing' className=" mr-auto mb-6 block"  />
                <h3 className="text-2xl font-semibold text-black">Digital Marketing</h3>   
                    <p className="mb-6">We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.</p>             
                </div>
                
            </div>
            <div className="bg-cyan-300 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:drop-shadow-lg cursor-pointer" >
                <div className="mb-12 space-y-4 ">
                <img src={graphicdesign} alt='Graphic Designing' className=" mr-auto mb-6 block"  />
                <h3 className="text-2xl font-semibold text-black">Graphic Designing</h3>   
                    <p className="mb-6">We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth. </p>             
                </div>
                
            </div>
          
            
        </div>
    </div>
</div>
 
  )
}

export default Servicesection
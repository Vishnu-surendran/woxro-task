import React from 'react'
import woxrologo from "../images/woxrologo.png"
import { Link } from 'react-router-dom'
import { MenuIcon } from '@heroicons/react/outline'
function Navbar() {
  return (
    <header >
        <nav className=''>
            <ul className='hidden tablet:flex justify-between items-center bg-black text-white h-10 '>
            <li>
<p><span className='font-bold'>Now Hiring</span>  :  
Looking for a job in Full Stack Development?</p>
            </li>
            <li><p>
  +91 487 2080 212
   
  Leshore Business Park, Thrissur</p></li>
        </ul>
       
        <div className='bg-white h-24 flex justify-between '>
<img className='pt-6 pl-6' src={woxrologo} width="205.875" height="56" alt='woxlogo'/>
<Link className='block ipad:hidden pt-8 pr-6'><MenuIcon className=' w-8 ipad:hidden' /></Link>

        </div>
           <div className='hidden ipad:flex justify-evenly items-center h-14 text-xl font-normal bg-black text-white' >
            <Link to="https://woxro.com/">Home</Link>
            <Link to="https://woxro.com/./aboutus">About us</Link>
            <Link to="https://woxro.com/./services">Services</Link>
            <Link to="https://woxro.com/./technology">Technology</Link>
            <Link to="https://woxro.com/./careers">Careers</Link>
            <Link to="https://woxro.com/./blogs">Blogs</Link>
            <Link to="https://woxro.com/./ourworks">Our works</Link>
            <Link to="contactus">Contact us</Link>
            
           </div>
        
        </nav>
    </header>
  )
}

export default Navbar
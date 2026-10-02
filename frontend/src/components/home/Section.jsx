import React from 'react'
import {ClockIcon} from '@heroicons/react/24/outline';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'; 
import { Link } from 'react-router-dom';
function Section() {
  return (
    <section className='p-10 flex items-center justify-between'>
     <div className='flex-col'>
        <h3 className='font-bold'>GYM WORKING HOURS: </h3>
        <p className='flex gap-4 mt-2' ><span ><ClockIcon  className='w-6 h-6 object-contain'/></span> : Mon - Sat : 5:00AM to 10:30AM</p>
        <p className='flex gap-4'><span><ClockIcon className='w-6 h-6 object-contain'/></span> : Sunday : 7:30AM to 12:00PM</p>

     </div>
        
     <div>
        <h3 className='font-bold'>FOR EASY CONTACT: </h3>
        <p className='flex gap-4 mt-2'><span><PhoneIcon className='w-6 h-6 text-black' />
        </span>+91 8302430523</p>
        <p className='flex gap-4'><span><EnvelopeIcon className='w-6 h-6 text-black' /></span>vikkipal0523@gmail.com</p>
     </div>

     <div className='w-40 h-15 flex text-center bg-lime-500 font-semibold justify-center items-center border rounded-2xl'>
        <Link to="/contact"> Contact Now</Link>
     </div>
    </section> 
    

)
}

export default Section;
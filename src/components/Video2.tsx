import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Video2() {
  return (
    <div className='relative '>
        {/* <Image src={`https://static.wixstatic.com/media/76516e_5505f962c794470c836a18dbdd296280f000.jpg/v1/fill/w_1366,h_581,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/76516e_5505f962c794470c836a18dbdd296280f000.jpg`} alt='..' height={400} width={300}/> */}
        <Image src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyaWVuZHNoaXB8ZW58MHx8MHx8fDA%3D" alt="an image" className='w-[1366px] h-[550px] object-cover border-2 border-black' height={400} width={300} />
        <h1 className='absolute top-5 text-xl lg:text-6xl lg:left-44 left-4'>A <span className=' text-red-800'>Digital & Media Marketing Agency</span> Specializing In Scaling Brands</h1>
        <h1 className=' absolute bottom-24 text-lg text-black font-semibold lg:transform lg:-translate-x-1/2 lg:left-1/2 left-3'>We, at Roar Media Ventures core principles revolve around three key elements: delivering the right communication, on the right platform, at the right time.</h1>
        <Link href={`/Contact`}><button className="absolute bottom-5 transform -translate-x-1/2 left-1/2 bg-red-600 text-white hover:bg-gray-600 hover:text-white lg:px-10 lg:py-3 p-2 rounded-xl lg:text-xl text-lg border-[1px] border-black">Book a meeting</button></Link>
    </div>
  )
}

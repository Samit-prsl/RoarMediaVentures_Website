import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Video2() {
  return (
    <div className='relative '>
        {/* <Image src={`https://static.wixstatic.com/media/76516e_5505f962c794470c836a18dbdd296280f000.jpg/v1/fill/w_1366,h_581,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/76516e_5505f962c794470c836a18dbdd296280f000.jpg`} alt='..' height={400} width={300}/> */}
        <Image src="https://static.wixstatic.com/media/76516e_bb33d1d488454c589d541d5753a9ead2~mv2.png/v1/fill/w_1366,h_553,al_c,q_90,enc_auto/76516e_bb33d1d488454c589d541d5753a9ead2~mv2.png" alt="an image" className='w-[1366px] h-[550px] object-cover border-2 border-black' height={400} width={300} />
        <h1 className='absolute top-5 text-xl lg:text-6xl lg:left-44 left-4 text-white'>A <span className=' text-red-600'>Digital & Media Marketing Agency</span> Specializing In Scaling Brands</h1>
        <h1 className=' absolute bottom-24 text-lg font-semibold lg:transform lg:-translate-x-1/2 lg:left-1/2 left-3 text-white'>We, at Roar Media Ventures core principles revolve around three key elements: delivering the right communication, on the right platform, at the right time.</h1>
        <Link href={`/contact`}><button className="absolute bottom-5 transform -translate-x-1/2 left-1/2 bg-red-600 text-white hover:bg-gray-600 hover:text-white lg:px-10 lg:py-3 p-2 rounded-xl lg:text-xl text-lg border-[1px] border-black">Book a meeting</button></Link>
    </div>
  )
}

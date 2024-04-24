import React from 'react'
import Link from 'next/link'
export default function Banner() {
  return (
    <div className=' h-full bg-gray-900 lg:flex lg:justify-center lg:items-center lg:gap-24  p-10'>
        <h1 className=' text-6xl text-white'><span className=' text-red-700'>GROW ONLINE </span>WITH US!</h1>
        <div className='  flex-col justify-around items-center py-6 lg:py-0'>
            <h4 className=' text-2xl text-white my-3 py-6 lg:py-0'>Establish Your Online Presence | Engage Your Audience on Social Media | Drive Results with Targeted Ads</h4>
            <Link href={`/Contact`}><button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] border-black">Book a meeting</button></Link>
        </div>
    </div>
  )
}

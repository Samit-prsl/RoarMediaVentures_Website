import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Banner2() {
  return (
    <div className=' bg-black p-10'>
      <h1 className=' lg:text-6xl text-3xl text-white text-center'>GROW YOUR BUSINESS IN</h1>
      <h1 className=' lg:text-6xl text-3xl text-red-600 text-center'>3 SIMPLE STEPS</h1>
      <div className='  lg:flex lg:justify-center lg:items-center gap-10 py-10'>
        <div className=' flex flex-col justify-center items-center gap-5 py-5 lg:py-0'>
            <Image src={`https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600`} alt='...'
            height={400} width={300}/>
            <h1 className=' text-3xl text-red-600 text-center'>STEP 1: Schedule Your FREE Audit</h1>
            <h3 className=' text-xl text-white text-center'>Our goal with this call is simple, to gain a deeper understanding of your business and provide you with practical strategies that will facilitate its growth.</h3>
        </div>
        <div className=' flex flex-col justify-center items-center gap-5 py-5 lg:py-0'>
            <Image src={`https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600`} alt='...'
            height={400} width={300}/>
            <h1 className=' text-3xl text-red-600 text-center'>STEP 2: Get Your 90 Days Growth Roadmap</h1>
            <h3 className=' text-xl text-white text-center'>No shiny objects and no unrealistic promises here. We show you a 90 days realistic roadmap keeping in mind how to get the highest ROAS and get higher repeat buyer %</h3>
        </div>
        <div className=' flex flex-col justify-center items-center gap-5 py-5 lg:py-0'>
            <Image src={`https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600`} alt='...'
            height={400} width={300}/>
            <h1 className=' text-3xl text-red-600 text-center'>STEP 3: Implement the Strategies and… Boom💥</h1>
            <h3 className=' text-xl text-white text-center'>At the end of the call, you will walk away with a proven strategy that&apos;s custom-made to help you grow your business</h3>
        </div>
      </div>
      <div className=' h-full flex justify-center items-center'>
        <Link href={`/contact`}><button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-pointer border-black">Get a free site audit</button></Link>
      </div>
    </div>
  )
}

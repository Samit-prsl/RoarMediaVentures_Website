import React from 'react'
import Slider from './Slider'
import Link from 'next/link'
export default function Scroller() {
  return (
    <div className=' py-10 px-16 my-5'>
      <h1 className=' lg:text-6xl text-3xl font-bold text-center space-y-2 text-red-600'>We Work With Brands Of Various Magnitude</h1>
      <h4 className=' lg:text-3xl text-xl text-center font-semibold text-black my-16'>Meet our Partners</h4>
        <div className=' hidden lg:block'>
          <Slider limit={412}/>
        </div>
        <div className=' lg:hidden block'>
          <Slider limit={980}/>
        </div>
      <div className=' h-full flex justify-center items-center my-12'>
        <Link href={`https://www.commoninja.com/widgets/logo-showcase?utm_medium=Embed`}><button className=" bg-gray-300 text-black hover:bg-gray-900 hover:text-white lg:px-5 lg:py-2 p-2 rounded-xl lg:text-xl text-lg border-[1px] border-black shadow-2xl w-[75vw] lg:w-full">Free logo showcase widget</button></Link>
      </div>
      <div className=' h-full flex justify-center items-center mt-12'>
        <Link href={`/contact`}><button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white lg:px-10 lg:py-3 p-2 rounded-xl lg:text-xl text-lg border-[1px] border-black">Book a meeting</button></Link>
      </div>
    </div>
  )
}

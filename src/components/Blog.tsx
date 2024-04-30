import React from 'react'
import Image from 'next/image'
import { IoPersonOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
export default function Blog() {
  return (
    <>
    <h1 className=' lg:text-3xl text-xl text-center text-red-600 py-6'>All Blogs</h1>
    <div className=' lg:grid lg:grid-cols-3 py-6 lg:px-10 px-6 min-h-screen '>
        <div className=' h-full flex-col justify-center items-center gap-5 lg:w-96'>
            <Image src={`https://static.wixstatic.com/media/8db2ed_f479da5335374e75b3019f0d96705a3e~mv2.webp`} alt='' height={400} width={300} className=' h-64 lg:w-96 py-5'/>
            <div className=' flex justify-between items-center lg:w-96 '>
                <div className=' flex justify-center items-center gap-1'>
                    <IoPersonOutline className=' text-4xl'/>
                    <div className=' flex-col justify-center items-center gap-2'>
                        <h1 className='text-sm font-thin'>anujit57</h1>
                        <p className=' text-sm font font-thin'>March 14 . 6 min</p>
                    </div>
                </div>
                <div>
                    <HiDotsVertical className=' text-2xl cursor-pointer' title='share ability coming soon'/>
                </div>
            </div>
            <h1 className=' text-xl font-bold py-4 hover:text-blue-500 cursor-pointer'>Importance of Social media Strategies in Digital Sales for a brand in 2024</h1>
            <p className=' text-lg py-1 hover:text-blue-500 cursor-pointer'>In today's digital age, social media has become an integral part of the modern customer journey. As consumers spend more time on social...</p>
        </div>
    </div>
    </>
  )
}

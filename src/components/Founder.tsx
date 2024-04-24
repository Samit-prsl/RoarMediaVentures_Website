import React from 'react'
import Image from 'next/image'
export default function Founder() {
  return (
    <div className=' m-10 lg:mx-56 bg-black lg:h-96 h-full lg:flex lg:justify-center lg:items-center rounded-tl-3xl rounded-br-3xl p-5 gap-28'>
        <Image src={`https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt='...' height={400} width={300} className=' h-full w-full object-cover pb-5 lg:pb-5 rounded-3xl'/>
        <div className=' flex-col justify-center items-start gap-16'>
            <h1 className=' text-3xl text-white text-left pt-5'>Priyam Bhandari</h1>
            <p className=' text-lg text-white pb-5'>Founder | Director</p>
            <p className=' text-lg text-white py-5'>Confidence is often the key ingredient that she brings success to the table, and she is someone, who exudes this quality immensely and that inspires, the team, to push past obstacles and achieve the goals ahead!</p>
        </div>
    </div>
  )
}

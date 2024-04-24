import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Video() {
  return (
    <div className='relative '>
        {/* <Image src={`https://static.wixstatic.com/media/76516e_5505f962c794470c836a18dbdd296280f000.jpg/v1/fill/w_1366,h_581,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/76516e_5505f962c794470c836a18dbdd296280f000.jpg`} alt='..' height={400} width={300}/> */}
        <Image src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="an image" className='w-[1366px] h-[550px] object-cover border-2 border-black' height={400} width={300} />
        <Link href={`/Contact`}><button className="absolute bottom-5 transform -translate-x-1/2 left-1/2 bg-red-600 text-white hover:bg-gray-600 hover:text-white lg:px-10 lg:py-3 p-2 rounded-xl lg:text-xl text-lg border-[1px] border-black">Book a meeting</button></Link>
    </div>
  )
}

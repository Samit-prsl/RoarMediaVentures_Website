
import React from 'react'
import Image from 'next/image'
//import { useMediaQuery } from 'usehooks-ts'
export default function YtLink() {
 // const large = useMediaQuery('(min-width: 768px)')

  return (
    <>
    <div className=' flex justify-center items-center h-full my-6 p-8'>
      <iframe width="760" height='515' src="https://www.youtube.com/embed/KrRHNutZC54?si=kh2xwBMlxe9MP0MS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <h1 className=' text-center text-black lg:text-4xl text-2xl px-3 lg:px-0'>MOST OF THE <span className=' text-red-600'>BUSINESS OWNERS FACE</span> ONE OR MORE OF THESE</h1>
    <div className=' h-full px-16 py-10 lg:flex lg:justify-between lg:items-center'>
        <div className=' flex flex-col justify-center items-center gap-4 py-5 lg:py-0'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={400} width={300} className='rounded-xl'/>
            <button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-auto border-black">No Scalability</button>
        </div>
        <div className=' flex flex-col justify-center items-center gap-4 py-5 lg:py-0'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={400} width={300} className='rounded-xl'/>
            <button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-auto border-black">Bad ROAS</button>
        </div>
        <div className=' flex flex-col justify-center items-center gap-4 py-5 lg:py-0'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={400} width={300} className='rounded-xl'/>
            <button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-auto border-black">No Profitability</button>
        </div>
    </div>
    </>
  )
}

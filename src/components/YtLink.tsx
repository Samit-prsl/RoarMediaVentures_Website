
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
    <h1 className=' text-center text-black font-semibold lg:text-4xl text-2xl px-3 lg:px-0'>MOST OF THE <span className=' text-red-600'>BUSINESS OWNERS FACE</span> ONE OR MORE OF THESE</h1>
    <div className=' h-full px-16 py-10 lg:flex lg:justify-center lg:items-center gap-28'>
        <div className=' flex flex-col justify-center items-center py-5 lg:py-0'>
            <Image src={`https://static.wixstatic.com/media/76516e_b346c8d416ca49ed971c6583739f480a~mv2.webp/v1/fill/w_193,h_193,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/No_Funneling.webp`} alt='...' height={200} width={200} className='rounded-xl'/>
            <button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-auto border-black">No Scalability</button>
        </div>
        <div className=' flex flex-col justify-center items-center py-5 lg:py-0'>
            <Image src={`https://static.wixstatic.com/media/76516e_a9c61fe3f91645d9acd7cce5a3b20a01~mv2.webp/v1/fill/w_193,h_193,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/No_ROAS_IN_THE_Business_Icon.webp`} alt='...' height={200} width={200} className='rounded-xl'/>
            <button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-auto border-black">Bad ROAS</button>
        </div>
        <div className=' flex flex-col justify-center items-center gap-6 py-5 lg:py-0'>
            <Image src={`https://static.wixstatic.com/media/76516e_008d3f54823c41df82ecd4ca89a15a2e~mv2.webp/v1/fill/w_232,h_193,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/No_Profitable.webp`} alt='...' height={200} width={200} className='rounded-xl'/>
            <button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-auto border-black">No Profitability</button>
        </div>
    </div>
    </>
  )
}

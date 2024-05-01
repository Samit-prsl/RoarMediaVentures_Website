import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Banner2() {
  const leftVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: -100, y: 0 },
 };
  const rightVariants = {
    hidden: { opacity: 0, x: 100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 100, y: 0 },
 };
  return (
    <div className=' bg-black p-10'>
      <h1 className=' lg:text-6xl text-3xl text-white text-center'>GROW YOUR BUSINESS IN</h1>
      <h1 className=' lg:text-6xl text-3xl text-red-600 text-center'>3 SIMPLE STEPS</h1>
      <div className='  lg:flex lg:justify-center lg:items-center gap-5 py-10'>
        <div className=' flex flex-col justify-center items-center gap-5 py-5 lg:py-0 lg:w-1/3'>
            <Image src={`https://static.wixstatic.com/media/76516e_99bcae63359b404bbb3d275a5cb7d1f0~mv2.png/v1/fill/w_233,h_233,al_c,lg_1,q_85,enc_auto/images-_4__edited.png`} alt='...'
            height={400} width={300} className=' lg:h-64'/>
            <h1 className=' text-3xl text-red-600 text-center'>STEP 1: Schedule Your FREE Audit</h1>
            <h3 className=' text-xl text-white text-center'>Our goal with this call is simple, to gain a deeper understanding of your business and provide you with practical strategies that will facilitate its growth.</h3>
        </div>
        <div className=' flex flex-col justify-center items-center gap-5 py-5 lg:py-0 lg:w-1/3'>
            <Image src={`https://static.wixstatic.com/media/76516e_f9ee48b9c5654b47a935bcb8f7e7ffcb~mv2.png/v1/fill/w_233,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pink%20Modern%20Frame%20Instagram%20Post_edited_.png`} alt='...'
            height={400} width={300} className=' lg:h-[280px]'/>
            <h1 className=' text-3xl text-red-600 text-center'>STEP 2: Get Your 90 Days Growth Roadmap</h1>
            <h3 className=' text-xl text-white text-center'>No shiny objects and no unrealistic promises here. We show you a 90 days realistic roadmap keeping in mind how to get the highest ROAS and get higher repeat buyer %</h3>
        </div>
        <div className=' flex flex-col justify-center items-center gap-5 py-5 lg:py-0 lg:w-1/3'>
            <Image src={`https://static.wixstatic.com/media/76516e_de79118c63694a55aaa1fecefa96c9da~mv2.png/v1/fill/w_233,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Implement_the_Strategies_Into_Business.png`} alt='...'
            height={400} width={300} className=' lg:h-56'/>
            <h1 className=' text-3xl text-red-600 text-center'>STEP 3: Implement the Strategies and… Boom💥</h1>
            <h3 className=' text-xl text-white text-center'>At the end of the call, you will walk away with a proven strategy that&apos;s custom-made to help you grow your business</h3>
        </div>
      </div>
      <div className=' h-full flex justify-center items-center'>
        <Link href={`/contact`}>
          <motion.button
          variants={rightVariants}
          initial={rightVariants.hidden}
          whileInView={leftVariants.enter}
          transition={{ type: 'spring', stiffness: 50 }}
          exit={leftVariants.exit}  
        className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-pointer border-black">Get a free site audit</motion.button></Link>
      </div>
    </div>
  )
}

"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Founder() {
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
    <motion.div
    variants={rightVariants}
    initial={rightVariants.hidden}
    whileInView={leftVariants.enter}
    transition={{ type: 'spring', stiffness: 50 }}
    exit={leftVariants.exit}  
    className=' m-10 lg:mx-56 bg-black lg:h-[420px] h-full lg:flex lg:justify-center lg:items-center rounded-tl-3xl rounded-br-3xl p-5 gap-28'>
        <Image src={`https://static.wixstatic.com/media/d45ab0_cdb4d6e2d4cb4a16aacb3250c20901bc~mv2.png/v1/fill/w_282,h_347,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Priyam.png`} alt='...' height={600} width={300} className=' h-full w-full object-cover pb-5 lg:pb-5 rounded-3xl'/>
        <div className=' flex-col justify-center items-start gap-16'>
            <h1 className=' text-3xl text-white text-left pt-5'>Priyam Bhandari</h1>
            <p className=' text-lg text-white pb-5'>Founder | Director</p>
            <div className=' flex justify-start items-center'>
                <Image src={`https://static.wixstatic.com/media/d45ab0_dd4224ecd428449eae602d6fced521e3~mv2.png/v1/fill/w_50,h_47,al_c,q_85,enc_auto/Quote%20icon.png`} alt='' height={20} width={50}/>
            </div>
            <p className=' text-lg text-white py-1'>Confidence is often the key ingredient that she brings success to the table, and she is someone, who exudes this quality immensely and that inspires, the team, to push past obstacles and achieve the goals ahead!</p>
            <div className=' flex justify-end items-center lg:pr-10'>
                <Image src={`https://static.wixstatic.com/media/d45ab0_dd4224ecd428449eae602d6fced521e3~mv2.png/v1/fill/w_50,h_47,al_c,q_85,enc_auto/Quote%20icon.png`} alt='' height={20} width={50} className='transform scale-y-[-1] scale-x-[-1]'/>
            </div>
        </div>
    </motion.div>
  )
}

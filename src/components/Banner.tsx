import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Banner() {
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
    <>
    <div className=' h-full bg-gray-900 lg:flex lg:justify-center lg:items-center lg:gap-24  p-10'>
        <h1 className=' text-6xl text-white'><span className=' text-red-700'>GROW ONLINE </span>WITH US!</h1>
        <div className='  flex-col justify-around items-center py-6 lg:py-0'>
            <h4 className=' text-2xl text-white my-3 py-6 lg:py-0'>Establish Your Online Presence | Engage Your Audience on Social Media | Drive Results with Targeted Ads</h4>
            <Link href={`/contact`}>
              <motion.button
               variants={rightVariants}
               initial={rightVariants.hidden}
               whileInView={leftVariants.enter}
               transition={{ type: 'spring', stiffness: 50 }}
               exit={leftVariants.exit}  
              className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] border-black">
                Book a meeting
                </motion.button>
                </Link>
        </div>
    </div>
    </>
  )
}

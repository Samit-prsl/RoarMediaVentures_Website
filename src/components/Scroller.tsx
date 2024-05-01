import React from 'react'
import Slider from './Slider'
import Link from 'next/link'
import {motion} from 'framer-motion'
export default function Scroller() {
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
        <Link href={`https://www.commoninja.com/widgets/logo-showcase?utm_medium=Embed`}>
          <motion.button 
              variants={rightVariants}
               initial={rightVariants.hidden}
               whileInView={leftVariants.enter}
               transition={{ type: 'spring', stiffness: 50 }}
               exit={leftVariants.exit} 
               className=" bg-gray-300 text-black hover:bg-gray-900 hover:text-white lg:px-5 lg:py-2 p-2 rounded-xl lg:text-xl text-lg border-[1px] border-black shadow-2xl w-[75vw] lg:w-full">
                Free logo showcase widget
                </motion.button>
                </Link>
      </div>
      <div className=' h-full flex justify-center items-center mt-12'>
        <Link href={`/contact`}>
          <motion.button 
          variants={rightVariants}
          initial={rightVariants.hidden}
          whileInView={leftVariants.enter}
          transition={{ type: 'spring', stiffness: 50 }}
          exit={leftVariants.exit} 
          className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white lg:px-10 lg:py-3 p-2 rounded-xl lg:text-xl text-lg border-[1px] border-black">
            Book a meeting
          </motion.button>
            </Link>
      </div>
    </div>
  )
}

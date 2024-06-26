"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
export default function BannerInAbout() {
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
    <div className=' bg-gray-900 p-8 '>
        <h1 className=' text-center lg:text-6xl text-3xl text-white py-8'>Let&apos;s Talk <span className=' text-red-600'>About Us</span></h1>
        <p className=' lg:text-xl text-lg text-white text-center py-8'>Based out of Kolkata, India Roar Media Venture is a digital marketing & Media agency that helps brands scale their business.</p>
        <p className=' lg:text-xl text-lg text-white text-center py-8'>Roar Media Venture was founded in October 2022 by Priyam Bhandari as a 360-degree media solution. In the past few months, we have been constantly building and expanding our service that can help the media industry to create and establish businesses, brands, shows, and films that are both consumer-centric and profitable.</p>
        <p className=' lg:text-xl text-lg text-white text-center py-8'>We&apos;re NOT just a branding agency or a social media agency that also does Performance Marketing.</p>
        <p className=' lg:text-xl text-lg text-white text-center py-8'>We as an Organization foster collaborative thinking to further drive workplace innovation.</p>
        <p className=' lg:text-xl text-lg text-white text-center py-8'>Every decision we make is data driven and anchored in measurable outcomes, ensuring your success.</p>
        <h1 className=' text-center lg:text-6xl text-3xl text-red-600 py-8'>Ready to invest in growth?</h1>
        <div className=' flex justify-center items-center'>
            <Link href={`/contact`}>
              <motion.button
              variants={rightVariants}
              initial={rightVariants.hidden}
              whileInView={leftVariants.enter}
              transition={{ type: 'spring', stiffness: 50 }}
              exit={leftVariants.exit}  
              className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] border-black">Book a meeting</motion.button></Link>
        </div>
    </div>
  )
}

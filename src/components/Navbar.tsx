"use client"
import React, { useState } from 'react'
import Icon from './Icon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
//import { useMediaQuery } from 'usehooks-ts'
import { VscThreeBars } from "react-icons/vsc"
import { RxCross2 } from "react-icons/rx";
import IconPhone from './IconPhone'
export default function Navbar() {
  //const large = useMediaQuery('(min-width: 768px)')
  const route = usePathname()
  const isHomeRoute  = route === '/'
  const isAboutRoute = route === '/About'
  const isServiceRoute = route === '/Servicee'
  const isBlogsRoute = route === '/Blogs'
  const isContactRoute = route ==='/Contact'
  const [click,Setclick] = useState<boolean>(false)
  return (
    <>
      <div className="bg-white h-20 px-8 py-2 mt-2 lg:flex justify-center items-center gap-48 sticky top-0 z-10 hidden">
      <Link href={`/`}><Icon/></Link>
      <div className=" h-full flex justify-center items-center gap-5">
          <Link href={`/`}><button className={isHomeRoute ? ` bg-red-600 border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-1 rounded-[4rem]`:`border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-2 rounded-[4rem]`}>Home</button></Link>
          <Link href={`/About`}><button className={isAboutRoute ? `bg-red-600 border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-1 rounded-[4rem]`:`border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-2 rounded-[4rem]`}>About</button></Link>
          <Link href={`/Servicee`}><button className={isServiceRoute ? `bg-red-600 border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-1 rounded-[4rem]`:`border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-2 rounded-[4rem]`}>Services</button></Link>
          <Link href={`/Blogs`}><button className={isBlogsRoute ? `bg-red-600 border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-1 rounded-[4rem]`:`border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-2 rounded-[4rem]`}>Blog</button></Link>
          <Link href={`/Contact`}><button className={isContactRoute ? `bg-red-600 border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-1 rounded-[4rem]`:`border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-2 rounded-[4rem]`}>Contact Us</button></Link>
      </div>
      </div>
        <div className=' pl-5 h-20 flex justify-between items-center top-0 sticky z-10 bg-white border-b-[1px] border-black lg:hidden'>
            <Link href={`/`}><IconPhone/></Link>
            {
              click ? (
                <div className=' mt-44 bg-white z-20 w-1/2 p-3'>
                <div className=" flex-col justify-center items-center gap-5 z-10 ">
               <div className=' flex justify-end items-center py-2'>
                <RxCross2 className=' text-3xl text-left cursor-pointer' onClick={()=>{Setclick(!click)}}/>
               </div>
                <Link href={`/`}><h1 className={isHomeRoute ? ` text-red-600 hover:bg-red-600 hover:text-white px-10 py-2`:` hover:bg-red-600 text-black hover:text-white px-10 py-2`}>Home</h1></Link>
                <Link href={`/About`}><h1 className={isAboutRoute ? ` text-red-600 hover:bg-red-600 hover:text-white px-10 py-2`:` hover:bg-red-600 text-black hover:text-white px-10 py-2`}>About</h1></Link>
                <Link href={`/Servicee`}><h1 className={isServiceRoute ? ` text-red-600 hover:bg-red-600 hover:text-white px-10 py-2`:` hover:bg-red-600 text-black hover:text-white px-10 py-2`}>Services</h1></Link>
                <Link href={`/Blogs`}><h1 className={isBlogsRoute ? ` text-red-600 hover:bg-red-600 hover:text-white px-10 py-2`:` hover:bg-red-600 text-black hover:text-white px-10 py-2`}>Blog</h1></Link>
                <Link href={`/Contact`}><h1 className={isContactRoute ? ` text-red-600 hover:bg-red-600 hover:text-white px-10 py-2`:` hover:bg-red-600 text-black hover:text-white px-10 py-2`}>Contact Us</h1></Link>
                </div>
            </div>
              ):
              (
                <div className=' pr-5'>
                  <VscThreeBars className=' text-3xl text-black cursor-pointer hover:text-gray-600' onClick={()=>{Setclick(!click)}}/>
                </div>
              )
            }
            </div>
    </>
  )
}

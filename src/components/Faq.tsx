"use client"
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function Faq() {
    const [click,Setclick] = useState<boolean>(false)
    const [click2,Setclick2] = useState<boolean>(false)
    const [click3,Setclick3] = useState<boolean>(false)
    const [click4,Setclick4] = useState<boolean>(false)
  return (
    <div className=' p-8'>
      <h1 className=' text-center lg:text-3xl text-xl text-black py-6'>Frequently asked questions</h1>
      <h3 className=' text-sky-500 py-6'>General</h3>

     <div className=' h-full flex justify-center items-center'>
     <div className='border-b-2 border-blue-700 lg:w-[60%] w-full py-8' >
            <div className=' h-full flex justify-between items-center'>
                <h1 className={` lg:text-xl text-lg`}>What sets Roar Media Venture apart from other digital marketing agencies?</h1>
                <div className=' flex h-full justify-center items-end'>
                    {
                      !click ?  <RiArrowDropDownLine className=' text-4xl cursor-pointer ' onClick={()=>{Setclick(!click)}} /> :  <RiArrowDropUpLine className=' text-4xl cursor-pointer ' onClick={()=>{Setclick(!click)}} />
                    }
                </div>
            </div>
            <p className={click ? `block py-2`:`hidden`}>Roar Media Venture sets itself apart by focusing on personalized and strategic digital marketing solutions for each client. Our team takes the time to understand the unique goals, challenges, and brand identity of each business we work with. By leveraging cutting-edge technology and industry expertise, we create tailored strategies that drive measurable results and long-term success. Our emphasis on proactive communication, transparency, and a commitment to continuous improvement ensures that our clients feel supported and confident in our partnership. At Roar Media Venture, we are dedicated to delivering exceptional value and impactful outcomes for every client we serve.</p>
      </div>
     </div>

     <div className=' h-full flex justify-center items-center '>
     <div className='border-b-2 border-blue-700 lg:w-[60%] w-full py-8'>
            <div className=' h-full flex justify-between items-center'>
                <h1 className={` lg:text-xl text-lg`}>Does Roar Media Ventures Only Provide Digital Marketing?</h1>
                <div className=' flex h-full justify-center items-end'>
                    {
                      !click2 ?  <RiArrowDropDownLine className=' text-4xl cursor-pointer' onClick={()=>{Setclick2(!click2)}} /> :  <RiArrowDropUpLine className=' text-4xl cursor-pointer' onClick={()=>{Setclick2(!click2)}} />
                    }
                </div>
            </div>
            <p className={click2 ? `block py-2`:`hidden`}>No, we provide both digital marketing, traditional marketing & media law services for any kind of industries.</p>
      </div>
     </div>

     <div className=' h-full flex justify-center items-center '>
     <div className='border-b-2 border-blue-700 lg:w-[60%] w-full py-8' >
            <div className=' h-full flex justify-between items-center'>
                <h1 className={` lg:text-xl text-lg`}>Why Is Digital Marketing Important?</h1>
                <div className=' flex h-full justify-center items-end'>
                  {
                    !click3 ? <RiArrowDropDownLine className=' text-4xl cursor-pointer' onClick={()=>{Setclick3(!click3)}}/> : <RiArrowDropUpLine className=' text-4xl cursor-pointer' onClick={()=>{Setclick3(!click3)}}/>
                  }
                </div>
            </div>
            <p className={click3 ? `block py-2`:`hidden`}>Digital marketing is vital because it allows your business to be unique and stand out in competitive online marketplaces. Not only is it vital for businesses, but consumers nowadays strongly depend on it to learn about business entities.</p>
      </div>
     </div>

     <div className=' h-full flex justify-center items-center '>
     <div className='border-b-2 border-blue-700 lg:w-[60%] w-full py-8' >
            <div className=' h-full flex justify-between items-center'>
                <h1 className={`text-left lg:text-xl text-lg`}>What Services Roar Media Ventures Offers?</h1>
                <div className=' flex h-full justify-center items-end'>
                  {
                    !click4 ?  <RiArrowDropDownLine className=' text-4xl cursor-pointer' onClick={()=>{Setclick4(!click4)}}/> :  <RiArrowDropUpLine className=' text-4xl cursor-pointer' onClick={()=>{Setclick4(!click4)}}/>
                  }
                </div>
            </div>
            <p className={click4 ? `block py-2 font-extralight`:`hidden`}>Roar Media Ventures (RMV) provides Traditional Marketing,Promotion, Events, Digital Marketing, Social Media Marketing, Performance Marketing, Email Automation Marketing, Whatsapp Automation Marketing, In-Film Branding, Influencer Marketing, Media Law Support, Content Licensing and Distribution.
</p>
      </div>
     </div>

    </div>
  )
}

import React from 'react'
import Icon from './Icon'
import Link from 'next/link';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt,FaFacebookF,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className=' bg-black h-full pt-5'>
    <div className=' bg-black h-full px-8 lg:flex lg:justify-center lg:items-center lg:gap-24'>
        <div className=' flex-col justify-center items-start gap-5 pt-5 lg:pt-0'>
            <Icon/>
            <h1 className=' lg:text-2xl text-xl  text-white py-3'>Your Digital & Media Marketing Partner : <span className='text-red-600'>Keep Roaring</span></h1>
            <div className=' flex justify-center items-center gap-3'>
                <IoLocationOutline className=' text-6xl lg:text-2xl text-red-600 cursor-pointer'/>
                <h1 className=' text-left text-lg text-white'>15th Floor, Acropolis Business Tower, © Sector 1, Rajdanga Main Road,Kolkata, West Bengal 700107</h1>
            </div>
            <div className=' flex justify-start items-center gap-3 py-2 cursor-pointer'>
                <FaPhoneAlt className=' text-2xl text-red-600'/>
                <h1 className=' text-left text-lg text-white'>(+91) 98315 25953</h1>
            </div>
            <div className=' flex justify-start items-center gap-3 py-2 cursor-pointer'>
                <MdOutlineEmail className=' text-2xl text-red-600'/>
                <h1 className=' text-left text-lg text-white'>contact@roarmediaventures.com</h1>
            </div>
        </div>
        <div className=' lg:flex lg:justify-center lg:items-start gap-24'>
            <div className=' flex-col justify-center items-center gap-2 py-5 lg:py-0'>
                <h1 className=' text-2xl text-center text-red-600 py-3 font-bold'>Our Services</h1>
                <p className=' text-lg text-white text-center py-1'>Promotion</p>
                <p className=' text-lg text-white text-center py-1'>Events</p>
                <p className=' text-lg text-white text-center py-1'>Digital Marketing</p>
                <p className=' text-lg text-white text-center py-1'>In-Film Marketing</p>
                <p className=' text-lg text-white text-center py-1'>Influencer Marketing</p>
                <p className=' text-lg text-white text-center py-1'>Media Law Support</p>
                <p className=' text-lg text-white text-center py-1'>Content License And Distribution</p>
                <p className=' text-lg text-white text-center py-1'>Social Media Marketing</p>
                <p className=' text-lg text-white text-center py-1'>Performance Marketing - Google</p>
                <p className=' text-lg text-white text-center py-1'>Performance Marketing – Meta</p>
                <p className=' text-lg text-white text-center py-1'>Email & WhatsApp Marketing Automation</p>
                <p className=' text-lg text-white text-center py-1'>Website Development</p>
                <p className=' text-lg text-white text-center py-1'>E-Commerce Marketing</p>
            </div>
            <div className=' flex-col justify-center items-center gap-2 py-5 lg:py-0'>
                <h1 className=' text-2xl text-center text-red-600 py-3 font-bold'>Helpful links</h1>
                <Link href={`/about`}><p className=' text-lg text-white text-center py-1'>About Us</p></Link>
                <Link href={`/blogs`}><p className=' text-lg text-white text-center py-1'>Blogs</p></Link>
               
            </div>
            <div className=' flex-col justify-center items-center gap-2 py-5 lg:py-0'>
                <h1 className=' text-2xl text-center text-red-600 py-3 font-bold'>Legal</h1>
                <p className=' text-lg text-white text-center py-1'>Privacy Policy</p>
                <p className=' text-lg text-white text-center py-1'>Terms and conditions</p>
                <p className=' text-lg text-white text-center py-1'>Sitemap</p>
            </div>
        </div>
    </div>
    <h1 className=' text-lg text-center text-red-600 py-8'>Follow us on</h1>
    <div className=' flex justify-center items-center border-b-[1px] border-sky-600 pb-5'>
            <div className=' lg:w-1/4 w-full flex justify-center items-center h-full text-white gap-10'>
                <FaFacebookF className=' text-2xl'/>
                <FaInstagram className=' text-2xl'/>
                <FaLinkedinIn className=' text-2xl'/>
                <FaYoutube className=' text-2xl'/>
            </div>
    </div>
    <h1 className=' lg:text-lg text-sm text-center text-white py-5 px-5 lg:px-0'>&copy; All rights reserved to Roar Media Ventures | 2024 | Created by Roar Media Ventures</h1>
    </div>
  )
}

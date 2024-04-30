
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Blogs from '@/components/Blog'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      {/* <div className=' min-h-screen flex justify-center items-center'>
            No Blogs!
      </div> */}
      <Blogs/>
      <Footer/>
    </div>
  )
}

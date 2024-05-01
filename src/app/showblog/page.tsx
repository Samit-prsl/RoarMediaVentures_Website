import Footer from '@/components/Footer'
import Fullblog from '@/components/Fullblog'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className=' min-h-screen'>
        <Fullblog views={10}/>
    </div>
    <Footer/>
    </>
  )
}

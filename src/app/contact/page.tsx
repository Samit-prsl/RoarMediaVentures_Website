import Calender from '@/components/Calender'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Calender/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

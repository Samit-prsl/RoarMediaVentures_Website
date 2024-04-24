
import BannerInAbout from '@/components/BannerInAbout'
import Footer from '@/components/Footer'
import Founder from '@/components/Founder'
import Navbar from '@/components/Navbar'
import Video2 from '@/components/Video2'
import YtLink2 from '@/components/YtLink2'
import YtLink2Phone from '@/components/YtLink2Phone'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Video2/>
      <div className=' lg:block hidden'>
      <YtLink2/>
      </div>
      <div className=' lg:hidden block'>
        <YtLink2Phone/>
      </div>
      <BannerInAbout/>
      <Founder/>
      <Footer/>
    </div>
  )
}

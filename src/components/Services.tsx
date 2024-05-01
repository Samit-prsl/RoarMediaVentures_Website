"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Services() {
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
    <div className=' lg:px-24 px-12 py-8'>
        <h1 className=' lg:text-3xl text-2xl text-black text-center py-8'>SERVICES WE <span className=' text-red-600'>OFFER</span></h1>
      <div className=' h-full lg:flex lg:justify-between lg:items-center gap-5 py-8'>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-2xl text-red-600 py-4 font-bold'>Promotion</h1>
                <p className=' text-lg py-6'>At Roar Media Ventures we understand the power of promotion as a catalyst for success. Whether you&apos;re launching a new product, expanding your market reach, or simply aiming to boost your brand visibility, our team of experts is committed to delivering results that exceed expectations.</p>
                <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul>
            </div>
            <Image src={`https://static.wixstatic.com/media/76516e_e4a181a67d364ffa9356bd4debf3bc09~mv2.jpg/v1/fill/w_416,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Special-Events-in-Malls.jpg`} alt='...' height={500} width={400} className=' h-[360px] w-[500px] object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://static.wixstatic.com/media/76516e_3bb3e163bfde4848bcc7460e42751d31~mv2.jpg/v1/fill/w_416,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eventshub_evergreen_opengraph_1200x630_2x.jpg`} alt='...' height={500} width={400} className=' h-[360px] w-[500px] object-cover py-5 lg:py-0'/>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold text-right'>Events</h1>
                <p className=' text-lg py-6 text-right'>At Roar Media Ventures, we understand the significance of every event, be it a grand corporate conference, an intimate event, or a lively social gathering. Our dedicated team of event professionals is committed to orchestrating seamless and unforgettable experiences tailored to your unique vision and preferences.</p>
                <h1 className=' text-lg text-red-600 py-1'>Events we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Corporate Events</li>
                    <li>Product Launch</li>
                    <li>Fashion Events</li>
                    <li>Festivals</li>
                </ul>
            </div>
      </div>
      <div className=' h-full lg:flex lg:justify-between lg:items-center gap-10 py-8'>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold'>Digital Marketing</h1>
                <p className=' text-lg py-6'>Embark on a transformative digital journey with Roar Media Ventures, where innovation meets strategy, and your brand&apos;s success is our ultimate goal.  Our agency specializes in SEO, PPC advertising, social media marketing, content marketing, and email marketing. With our SEO services, we&apos;ll boost your website&apos;s visibility on search engines. Our PPC advertising campaigns will drive targeted traffic to your site, increasing conversions. Engage with your audience on social media with our expertly crafted content. Become an industry thought leader with our content marketing strategies. Stay connected with your audience through personalized email campaigns. Contact us today to learn how we can help you achieve your business goals!</p>
                <h1 className=' text-lg text-red-600 py-1'>Digital Marketing we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Content Marketing</li>
                    <li>PPC advertising campaigns</li>
                    <li>Digital Promotion</li>
                </ul>
            </div>
            <Image src={`https://static.wixstatic.com/media/76516e_efde83f4cd814350acfd71f9a7c292bf~mv2.webp/v1/fill/w_426,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/digital-marketing-.webp`} alt='...' height={500} width={400} className=' h-[460px] w-[500px] object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://static.wixstatic.com/media/76516e_e700b7f4f836405da0b6c5655e17243f~mv2.jpg/v1/fill/w_368,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11906380_4845299.jpg`} alt='...' height={500} width={400} className=' h-[360px] w-[500px] object-cover py-5 lg:py-0'/>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold text-right'>Social Media Marketing</h1>
                <p className=' text-lg py-6 text-right'>Are you looking to elevate your brand&apos;s online presence? Our social media marketing agency specializes in creating tailored strategies to help businesses like yours thrive in the digital world. With a team of experienced professionals, we offer a range of services designed to boost your brand&apos;s visibility and engagement across various social media platforms. </p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Events we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Corporate Events</li>
                    <li>Product Launch</li>
                    <li>Fashion Events</li>
                    <li>Festivals</li>
                </ul> */}
            </div>
      </div>
      <div className=' h-full lg:flex lg:justify-between lg:items-center gap-5 py-8'>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold'>Performance Marketing</h1>
                <p className=' text-lg py-6'>Drive performance and maximize your ROI with our performance marketing solutions. Whether you&apos;re looking to advertise on Google, optimize your meta ads, or expand your reach on marketplace platforms, our agency has the expertise to help you succeed. With our Google Ads services, we&apos;ll create targeted campaigns that drive qualified traffic to your website. Our meta ad optimization strategies will ensure that your ads stand out and attract clicks. Additionally, we&apos;ll help you leverage marketplace platforms like Amazon, Flipkart and more to reach a wider audience and drive more sales. Contact us today to learn more about how we can elevate your performance marketing efforts!</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul> */}
            </div>
            <Image src={`https://static.wixstatic.com/media/76516e_c42c72675cec4067a531d0f1211c4829~mv2.jpg/v1/fill/w_426,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/q6xsm62.jpg`} alt='...' height={500} width={400} className=' h-[360px] w-[500px]  object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://static.wixstatic.com/media/76516e_1b63886c21e74525bb7a932627f5765c~mv2.png/v1/fill/w_426,h_281,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop.png`} alt='...' height={500} width={400} className=' h-[360px] w-[500px] object-cover py-5 lg:py-0'/>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold text-right'>Email Automation Marketing</h1>
                <p className=' text-lg py-6 text-right'>Empower engagement with trends, boost brand positioning, and ensure recall via our email solutions. Retention strategies drive highest ROAS, fostering substantial revenue growth for your brand.</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Events we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Corporate Events</li>
                    <li>Product Launch</li>
                    <li>Fashion Events</li>
                    <li>Festivals</li>
                </ul> */}
            </div>
      </div>
      <div className=' h-full lg:flex lg:justify-between lg:items-center gap-5 py-8'>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold'>WhatsApp Automation Marketing</h1>
                <p className=' text-lg py-6'>Drive performance and maximize your ROI with our performance marketing solutions. Whether you&apos;re looking to advertise on Google, optimize your meta ads, or expand your reach on marketplace platforms, our agency has the expertise to help you succeed. With our Google Ads services, we&apos;ll create targeted campaigns that drive qualified traffic to your website. Our meta ad optimization strategies will ensure that your ads stand out and attract clicks. Additionally, we&apos;ll help you leverage marketplace platforms like Amazon and eBay to reach a wider audience and drive more sales. Contact us today to learn more about how we can elevate your performance marketing efforts!</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul> */}
            </div>
            <Image src={`https://static.wixstatic.com/media/76516e_df0c85ecd80a4cf6bf7d6fe0802108a9~mv2.webp/v1/fill/w_293,h_343,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/whatapp_Marketing-Automation.webp`} alt='...' height={500} width={400} className=' h-[360px] w-[500px]  object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://static.wixstatic.com/media/76516e_d24ac94eedb14cbf92b15c873a3ac5f4~mv2.webp/v1/fill/w_426,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/960x0.webp`} alt='...' height={500} width={400} className=' h-[360px] w-[500px] object-cover py-5 lg:py-0'/>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold text-right'>In-Film Branding</h1>
                <p className=' text-lg py-6 text-right'>We redefine the landscape of marketing by seamlessly integrating brands into the storytelling canvas of cinema. As pioneers in the realm of in-film marketing, we specialize in crafting unforgettable brand experiences that captivate audiences and leave an indelible mark on their cinematic journey.</p>
                <h1 className=' text-lg text-red-600 py-1'>In-Film Branding</h1>
                <ul className='text-md list-disc '>
                    <li>Product Placement</li>
                    <li>Title Card Credits</li>
                    <li>Hyper Active Scene</li>
                    <li>Actor Testimonials</li>
                </ul>
            </div>
      </div>
      <div className=' h-full lg:flex lg:justify-between lg:items-center gap-5 py-8'>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold'>Influencer Marketing</h1>
                <p className=' text-lg py-6'>What sets Roar Media Ventures apart is our commitment to precision and relevance. We meticulously select influencers based not only on their reach but on their ability to genuinely connect with their audience. Our data-driven approach ensures that every collaboration is backed by insights, maximizing the impact of your influencer marketing campaigns.</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul> */}
            </div>
            <Image src={`https://static.wixstatic.com/media/76516e_ec360d75c7ce4542b061ccd8531ed3b3~mv2.jpg/v1/fill/w_359,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c7a2390ee1aa26484781d5727ee656df3e7b256.jpg`} alt='...' height={500} width={400} className=' h-[360px] w-[500px]  object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://static.wixstatic.com/media/76516e_7449000bd4c44287b52e32b8d67d65a9~mv2.jpg/v1/fill/w_407,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled-design-15_edited.jpg`} alt='...' height={500} width={400} className=' h-[360px] w-[500px] object-cover py-5 lg:py-0'/>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold text-right'>Media Law Support</h1>
                <p className=' text-lg py-6 text-right'>Roar Media Ventures safeguards journalists, publishers, and broadcasters with comprehensive media law support. Our experienced team helps you gather information freely, report with confidence, and comply with regulations.  Let roar media ventures be your shield in the ever-changing media landscape.</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Events we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Corporate Events</li>
                    <li>Product Launch</li>
                    <li>Fashion Events</li>
                    <li>Festivals</li>
                </ul> */}
            </div>
      </div>
      <div className=' h-full lg:flex lg:justify-between lg:items-center gap-5 py-8'>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold'>Content Licensing and Distribution</h1>
                <p className=' text-lg py-6'>Roar Media Ventures (RMV) provides expert content licensing and distribution services. We offer access to a wide range of high-quality content, including articles, images, and videos, helping businesses save time and resources. Our distribution channels, including websites and social media, maximize brand visibility and drive traffic. With RMV, businesses can navigate content licensing and distribution with ease.</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul> */}
            </div>
            <Image src={`https://static.wixstatic.com/media/76516e_ca538e273daa45e2899cb0474cc2586e~mv2.jpg/v1/fill/w_328,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/mobile-and-license-agreement-contract-vector-22938346_edited.jpg`} alt='...' height={500} width={400} className=' h-[360px] w-[500px]  object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full flex justify-center items-center'>
            <h1 className=' lg:text-3xl text-xl text-red-600 text-center'>AND MANY MORE....</h1>
      </div>
      <div className=' h-full flex justify-center items-center py-5'>
            <Link href={`/contact`}><motion.button
            variants={rightVariants}
            initial={rightVariants.hidden}
            whileInView={leftVariants.enter}
            transition={{ type: 'spring', stiffness: 50 }}
            exit={leftVariants.exit} 
            className='border-[1px] border-red-600 hover:bg-red-600 text-black hover:text-white px-10 py-2 rounded-[4rem]'>Schedule a Call</motion.button></Link>
      </div>
    </div>
  )
}

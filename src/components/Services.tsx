import React from 'react'
import Image from 'next/image'
export default function Services() {
  return (
    <div className=' lg:px-24 px-12 py-8'>
        <h1 className=' lg:text-3xl text-2xl text-black text-center py-8'>SERVICES WE <span className=' text-red-600'>OFFER</span></h1>
      <div className=' h-full lg:flex lg:justify-between lg:items-center gap-5 py-8'>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold'>Promotion</h1>
                <p className=' text-lg py-6'>At Roar Media Ventures we understand the power of promotion as a catalyst for success. Whether you're launching a new product, expanding your market reach, or simply aiming to boost your brand visibility, our team of experts is committed to delivering results that exceed expectations.</p>
                <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul>
            </div>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px] lg:w-full object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px] lg:w-full object-cover py-5 lg:py-0'/>
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
                <p className=' text-lg py-6'>Embark on a transformative digital journey with Roar Media Ventures, where innovation meets strategy, and your brand's success is our ultimate goal.  Our agency specializes in SEO, PPC advertising, social media marketing, content marketing, and email marketing. With our SEO services, we'll boost your website's visibility on search engines. Our PPC advertising campaigns will drive targeted traffic to your site, increasing conversions. Engage with your audience on social media with our expertly crafted content. Become an industry thought leader with our content marketing strategies. Stay connected with your audience through personalized email campaigns. Contact us today to learn how we can help you achieve your business goals!</p>
                <h1 className=' text-lg text-red-600 py-1'>Digital Marketing we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Content Marketing</li>
                    <li>PPC advertising campaigns</li>
                    <li>Digital Promotion</li>
                </ul>
            </div>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[460px] w-[400px] object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px] lg:w-full object-cover py-5 lg:py-0'/>
            <div className=' flex-col justify-center items-center gap-5'>
                <h1 className=' text-xl text-red-600 py-4 font-bold text-right'>Social Media Marketing</h1>
                <p className=' text-lg py-6 text-right'>Are you looking to elevate your brand's online presence? Our social media marketing agency specializes in creating tailored strategies to help businesses like yours thrive in the digital world. With a team of experienced professionals, we offer a range of services designed to boost your brand's visibility and engagement across various social media platforms. </p>
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
                <p className=' text-lg py-6'>Drive performance and maximize your ROI with our performance marketing solutions. Whether you're looking to advertise on Google, optimize your meta ads, or expand your reach on marketplace platforms, our agency has the expertise to help you succeed. With our Google Ads services, we'll create targeted campaigns that drive qualified traffic to your website. Our meta ad optimization strategies will ensure that your ads stand out and attract clicks. Additionally, we'll help you leverage marketplace platforms like Amazon, Flipkart and more to reach a wider audience and drive more sales. Contact us today to learn more about how we can elevate your performance marketing efforts!</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul> */}
            </div>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px]  object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px] lg:w-full object-cover py-5 lg:py-0'/>
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
                <p className=' text-lg py-6'>Drive performance and maximize your ROI with our performance marketing solutions. Whether you're looking to advertise on Google, optimize your meta ads, or expand your reach on marketplace platforms, our agency has the expertise to help you succeed. With our Google Ads services, we'll create targeted campaigns that drive qualified traffic to your website. Our meta ad optimization strategies will ensure that your ads stand out and attract clicks. Additionally, we'll help you leverage marketplace platforms like Amazon and eBay to reach a wider audience and drive more sales. Contact us today to learn more about how we can elevate your performance marketing efforts!</p>
                {/* <h1 className=' text-lg text-red-600 py-1'>Promotion we offer</h1>
                <ul className='text-md list-disc '>
                    <li>Advertisement</li>
                    <li>In-Film</li>
                    <li>Commercials</li>
                    <li>Events</li>
                </ul> */}
            </div>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px]  object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px] lg:w-full object-cover py-5 lg:py-0'/>
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
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px]  object-cover py-5 lg:py-0'/>
      </div>
      <div className=' h-full lg:flex lg:justify-center lg:items-center gap-16 py-8'>
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px] lg:w-full object-cover py-5 lg:py-0'/>
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
            <Image src={`https://plus.unsplash.com/premium_photo-1681487977919-306ef7194d98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjYWxhYmlsaXR5fGVufDB8fDB8fHww`} alt='...' height={500} width={400} className=' h-[360px] w-[400px]  object-cover py-5 lg:py-0'/>
      </div>
    </div>
  )
}

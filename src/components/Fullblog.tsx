"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
export default function Fullblog({ views }: { views: number }) {
    const [likes,Setlikes] = useState<boolean>(false)
  return (
    <div className=' px-10 py-8 flex flex-col justify-center items-center'>
        <div className=' flex justify-between items-center lg:w-[57%] w-full'>
            <div className=' flex justify-center items-center'>
                    <IoPersonOutline className=' text-4xl'/>
                    <div className=' flex-col justify-center items-center gap-2'>
                        <h1 className='text-sm font-thin'>anujit57</h1>
                        <p className=' text-sm font font-thin'>March 14 . 6 min</p>
                    </div>
            </div>
            <div>
                    <HiDotsVertical className=' text-2xl cursor-pointer' title='share ability coming soon'/>
            </div>
        </div> 
        <div className=' border-b-[1px] border-black lg:w-[57%] py-8'>
            <h1 className=' lg:text-3xl text-2xl font-bold'>Importance of Social media Strategies in Digital Sales for a brand in 2024</h1>
            <Image src={`https://static.wixstatic.com/media/8db2ed_f479da5335374e75b3019f0d96705a3e~mv2.webp`} alt='' height={400} width={300} className=' lg:h-[450px] h-96 py-8 w-full'/>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>In today&apos;s digital age, social media has become an integral part of the modern customer journey. As consumers spend more time on social media, the channel offers unparalleled access for brands to influence purchase decisions at every stage, from discovery to advocacy.</p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
                    It has not only revolutionized the way we communicate and interact with each other but has also transformed the way businesses operate. One of the key areas where social media has had a significant impact is in digital sales for brands.Social media channels play a crucial role in driving sales, building brand awareness, and engaging with customers. The advent of platforms like Facebook, Instagram, Twitter, and LinkedIn has revolutionized the way businesses connect with their audiences, offering unprecedented opportunities to expand reach, build brand loyalty, and drive sales.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            In this article, we will explore the importance of social media channels in digital sales for a brand.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>Building Brand Awareness</h1>
            <Image src={`https://static.wixstatic.com/media/8db2ed_454a8f7f97584edb8ac5e72a0ad95cb6~mv2.webp`} alt='' height={400} width={300} className=' lg:h-[500px] h-96 py-4 w-full'/>
            <h1 className=' lg:text-xl text-lg lg:py-4 py-2'>Image Source: <Link href={`www.beautiful.ai`} className=' text-sky-700'>www.beautiful.ai</Link></h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>Building Brand awareness is a crucial step for any business looking to establish itself in the market. In today's Mordan days, social media channels have become indispensable tools for achieving this goal. Platforms such as Facebook, Instagram, Twitter, and LinkedIn offer brands a unique opportunity to reach a large audience and create a strong online presence.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            One of the key advantages of using social media for building brand awareness is the ability to connect with a target audience. These platforms allow brands to tailor their content to specific demographics, interests, and behaviours, ensuring that their message resonates with the right people. By regularly posting engaging content, brands can capture the attention of their followers and encourage them to interact with their posts.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Interacting with followers is another effective way to increase brand awareness on social media. Responding to comments, messages, and mentions shows that a brand is attentive and cares about its customers. This level of engagement can help humanize the brand and make it more relatable to its audience, leading to increased brand loyalty and trust.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Moreover, social media allows brands to leverage user-generated content (UGC) to further enhance their brand awareness. Encouraging customers to create and share content related to the brand can significantly expand its reach and visibility. UGC is seen as more authentic and trustworthy by consumers, making it a valuable asset for building brand awareness.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Social media channels provide brands with a powerful platform to build brand awareness and connect with their target audience. By leveraging these platforms effectively, brands can increase their visibility, reach a wider audience, and ultimately, drive higher sales.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>Driving Traffic to Your Website</h1>
            <Image src={`https://static.wixstatic.com/media/8db2ed_8cf3c541d3f94ca1a5900bbea2814d60~mv2.webp`} alt='' height={400} width={300} className=' lg:h-[500px] h-96 py-4 w-full'/>
            <h1 className=' lg:text-xl text-lg lg:py-4 py-2'>Image Source: <Link href={`http://www.searchenginejournal.com/`} className=' text-sky-700'>http://www.searchenginejournal.com/</Link></h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Driving traffic to your website is essential for expanding your online presence and increasing your opportunities for conversions. Social media channels play a crucial role in achieving this goal by serving as effective platforms for promoting your website and attracting visitors.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Platforms like Facebook, Instagram, Twitter, and LinkedIn offer various features and tools that allow businesses to drive traffic to their websites. By sharing links to your website on your social media profiles and posts, you can direct your followers to explore your products or services further. Additionally, utilizing features like "Swipe Up" links on Instagram Stories or "Shop Now" buttons on Facebook posts enables users to make a direct transition from social media to your website, streamlining the process and increasing the likelihood of conversion
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Engaging content is key to encouraging users to click on your website links. Posting compelling visuals, informative articles, or engaging videos can capture the attention of your audience and entice them to learn more by visiting your website. Providing valuable and relevant content establishes your authority in your industry and builds trust with your audience, making them more likely to click through to your website.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Furthermore, social media advertising can be a powerful tool for driving targeted traffic to your website. Platforms like Facebook Ads and Instagram Ads allow you to create highly targeted ad campaigns based on demographics, interests, and behaviors. By reaching the right audience with the right message, you can attract users who are more likely to be interested in your offerings and convert them into website visitors.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Social media channels are leveraging effectively can significantly increase traffic to your website. By sharing compelling content, utilizing relevant features, and leveraging targeted advertising, you can attract more visitors to your site and ultimately, increase your opportunities for conversions and sales.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>Engaging with Your Audience</h1>
            <Image src={`https://static.wixstatic.com/media/8db2ed_ac8336e4f38c4868b8b6ad5ae65b6d5b~mv2.webp`} alt='' height={400} width={300} className=' lg:h-[500px] h-96 py-4 w-full'/>
            <h1 className=' lg:text-xl text-lg lg:py-4 py-2'>Image Source: <Link href={`https://www.linkedin.com/pulse/how-engage-your-audience-social-media-platforms-dhruv-prajapati/`} className=' text-sky-700'>Dhruv Prajapati</Link></h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Engaging with your audience is a key component of building a successful brand on social media. Platforms like Twitter and Facebook offer businesses the opportunity to interact with their customers in real-time, building relationships and fostering loyalty. Here are some strategies for engaging with your audience effectively:
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>1. Respond to Comments and Messages : </h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Monitor your social media accounts regularly and respond to comments and messages promptly. Acknowledge feedback, answer questions, and address concerns to show your audience that you care about their opinions and value their input.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>2. Create Engaging Content : </h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Share content that is relevant, interesting, and valuable to your audience. Use a mix of text, images, and videos to keep your feed dynamic and engaging. Encourage interaction by asking questions, running polls, or hosting contests.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>3. Showcase Customer Stories: </h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Share stories and testimonials from satisfied customers to humanize your brand and build trust. User-generated content can be particularly effective in engaging with your audience and showcasing the real-life benefits of your products or services.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>4. Offer Exclusive Deals and Promotions: </h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Reward your social media followers with exclusive deals, discounts, or promotions. This not only encourages engagement but also drives sales and boosts brand loyalty.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>5.Use Hashtags and Trending Topics: </h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Stay current with trending topics and use relevant hashtags to increase the visibility of your posts. Participating in popular conversations can help you reach a wider audience and increase engagement.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>6. Host Live Events: </h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Use live streaming features on platforms like Instagram and Facebook to host Q&A sessions, product demonstrations, or behind-the-scenes tours. Live events are a great way to interact with your audience in real-time and create a sense of community around your brand.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>7. Monitor and Analyze Performance: </h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Use social media analytics tools to track the performance of your posts and campaigns. Monitor engagement metrics such as likes, comments, and shares to identify what content resonates most with your audience and adjust your strategy accordingly.
            </p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Engaging with your audience on social media is essential for building a strong brand presence and fostering customer loyalty. By responding to comments, creating engaging content, showcasing customer stories, offering exclusive deals, and using hashtags and trending topics, you can effectively engage with your audience and build meaningful relationships that drive business growth.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>Targeted Advertising</h1>
            <Image src={`https://static.wixstatic.com/media/8db2ed_3dc24ded7b9145efae3e7c4ad356a1f0~mv2.webp`} alt='' height={400} width={300} className=' lg:h-[500px] h-96 py-4 w-full'/>
            <h1 className=' lg:text-xl text-lg lg:py-4 py-2'>Image Source: <Link href={`https://www.linkedin.com/pulse/what-targeted-advertising-its-role-social-networking-chulanova/`} className=' text-sky-700'>Viktoria Chulanova</Link></h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>Targeted advertising is a key feature of social media channels that can significantly benefit businesses. Platforms like Facebook and Instagram offer powerful tools that allow businesses to target specific audiences based on demographics, interests, and behaviour.</p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>By utilizing these tools, businesses can ensure that their ads are seen by the right people, increasing the likelihood of a sale. For example, a clothing brand can target its ads to users who have shown an interest in fashion, ensuring that the message reaches those most likely to be interested in the products.Platforms like Facebook and Instagram also offer robust analytics tools that allow businesses to track the performance of their ads and make adjustments as needed. This level of insight enables businesses to refine their targeting strategies and optimize their campaigns for better results.</p>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>
            Targeted advertising on social media channels offers businesses a powerful way to reach their target audience and increase the likelihood of a sale. By leveraging these tools effectively, businesses can improve the effectiveness of their advertising campaigns and drive higher sales.
            </p>
            <h1 className=' lg:text-3xl text-2xl font-bold py-5'>Conclusion</h1>
            <p className=' lg:text-xl text-lg lg:py-4 py-2'>In conclusion, social media channels have become an essential tool for businesses looking to succeed in the digital age. They offer a wide range of benefits, from enhancing brand awareness to driving website traffic, engaging with audiences, and using targeted advertising. By leveraging these platforms, businesses can reach a larger audience, increase brand visibility, and drive more sales and revenue.As an agency, we provide social media marketing services to help businesses maximize their presence on these platforms. Our expertise in creating targeted advertising campaigns and engaging content can assist businesses in achieving their goals and driving higher sales.
            </p>
        </div>
        <div className=' flex justify-start items-center gap-4 lg:w-[57%] w-full border-b-[1px] border-black py-4'>
                 <Link href={`https://www.facebook.com/roarmediaventures/`} target="_blank"><FaFacebookF className=' text-2xl hover:text-red-600'/></Link>
                <Link href={`https://www.instagram.com/rmvsocial/`} target="_blank"><FaInstagram className=' text-2xl hover:text-red-600'/></Link>
                <Link href={`https://www.linkedin.com/company/roar-media-ventures/`} target="_blank"><FaLinkedinIn className=' text-2xl hover:text-red-600'/></Link>
                <Link href={`https://www.youtube.com/@rmv-yt`} target="_blank"><FaYoutube className=' text-2xl hover:text-red-600'/></Link>
        </div>
        <div className=' flex justify-between items-center gap-4 lg:w-[57%] w-full py-4'>
            <h1 className=' text-md text-gray-500'>{views} views</h1>
                <div>
                    {
                        likes ? 
                        <FaHeart className=' text-red-600 text-2xl cursor-pointer' onClick={()=>{Setlikes(!likes)}}/>
                        :
                        <CiHeart className=' text-black text-2xl cursor-pointer' onClick={()=>{Setlikes(!likes)}}/>
                    }
                </div>
        </div>
    </div>
  )
}

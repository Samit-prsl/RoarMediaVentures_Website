import React from 'react'

export default function ContactForm() {
  return (
    <div className=' shadow-2xl flex flex-col justify-center items-center rounded-3xl p-8 lg:mx-64 gap-10 w-full lg:w-auto mb-6'>
        <h1 className=' text-left text-bold text-black text-3xl'>Want to Scale your Business with US?</h1>
      <input type="text" placeholder='First Name' className=' rounded-[4rem] lg:w-1/2 w-full outline-none border-[1px] border-black p-3' />
      <input type="text" placeholder='Last Name' className=' rounded-[4rem] lg:w-1/2 w-full outline-none border-[1px] border-black p-3' />
      <input type="text" placeholder='First Name' className=' rounded-[4rem] lg:w-1/2 w-full outline-none border-[1px] border-black p-3' />
      <input type="email" placeholder='Email' className=' rounded-[4rem] lg:w-1/2 w-full outline-none border-[1px] border-black p-3' />
      <input type="text" placeholder='Phone' className=' rounded-[4rem] lg:w-1/2 w-full outline-none border-[1px] border-black p-3' />
      <div className='rounded-[4rem] lg:w-1/2 w-full flex outline-none border-[1px] border-black p-3 bg-gray-200'>
      <label htmlFor="ChooseOption"></label>
      <select name="ChooseOption" id="ChooseOption" className=' w-full'>
      <option value="Choose Option">Choose Option</option>
        <option value="Promotion">Promotion</option>
        <option value="Events">Events</option>
        <option value="Digital">Digital Marketing</option>
        <option value="Social">Social media Marketing</option>
        <option value="Performance">Performance Marketing</option>
        <option value="WhatsApp">WhatsApp Automation Marketing</option>
        <option value="In-Film">In-Film Branding</option>
        <option value="Influencer">Influencer Marketing</option>
        <option value="Media">Media Law Support</option>
        <option value="Content">Content Licensing and Distribution</option>
      </select>
    </div>
    <textarea name="message" id="" cols={30} rows={10} className='rounded-[1rem] lg:w-1/2 w-full outline-none border-[1px] border-black p-6' placeholder='Enter something'></textarea>
    <div className=' flex justify-center items-center'>
        <button className=" bg-red-600 text-white hover:bg-gray-600 hover:text-white px-8 py-2 rounded-xl text-xl border-[1px] cursor-auto border-black">Submit</button>
    </div>
    </div>
  )
}

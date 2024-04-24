"use client"
import React, { useEffect } from 'react';

export default function Calender() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='bg-white p-10'>
      <h1 className='lg:text-4xl text-2xl text-red-600 text-center font-semibold py-8 lg:py-0'>LET&apos;S TALK</h1>
      <div className=' py-8 lg:py-0 lg:pb-8'>
        <div className="calendly-inline-widget" data-url="https://calendly.com/samit-prsl/30min?primary_color=ff0030" style={{minWidth:'320px',height:'700px'}}></div>
      </div>
    </div>
  );
}

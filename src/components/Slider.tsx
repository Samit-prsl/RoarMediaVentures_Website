"use client"
import React,{useEffect, useRef} from 'react'

export default function Slider() {
    const array = [
        "https://plus.unsplash.com/premium_photo-1684341008285-3da3c563143e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNvbnN8ZW58MHx8MHx8fDA%3D","https://plus.unsplash.com/premium_photo-1684341008404-af4df3d54615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1684341008716-8e4b771eb9e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w2fHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1684341008757-3b456034e943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1684341008385-31d2eb4f3afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w1fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBpY29uc3xlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1601592935678-406968278b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1590102426319-c7526718cd70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
    ]
    const containerRef = useRef(null)
    useEffect(()=>{
        const container:any = containerRef.current
        const scroll = () =>{
            if(container) {
                const distance = 2
                container.scrollLeft += distance
                if (container.scrollLeft >= 2627) {
                    container.scrollLeft = 0
                }
                //console.log(container.scrollLeft);   
            }
        }
        const interval = setInterval(scroll,10)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div className=' flex overflow-x-auto ' ref={containerRef} style={{"scrollbarWidth":"none","msOverflowStyle":"none"}}>
    {array.map((items:any,index:number)=>{
        return (
            <div className=' flex-shrink-0 px-10' key={index}>
                <img src={items} alt="" className=' lg:h-[250px] h-48 lg:w-full w-full' />
            </div>
        )
    })}
    </div>
  )
}
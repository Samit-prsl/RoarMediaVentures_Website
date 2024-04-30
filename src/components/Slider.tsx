"use client"
import React,{useEffect, useRef} from 'react'

export default function Slider({ limit }: { limit: number }) {
    const array = [
        "https://uploads.commoninja.com/logo_showcase/1711101400261_spice_route_legal_logo.jfif","https://uploads.commoninja.com/logo_showcase/1711101349460_Beige_and_White_Be_Yourself_Square_Pillow.png","https://uploads.commoninja.com/logo_showcase/1711101542545_Beige_and_White_Be_Yourself_Square_Pillow_1.png","https://uploads.commoninja.com/logo_showcase/1711100975183_ITT9hT5B_400x400.jpg",
        "https://uploads.commoninja.com/logo_showcase/1711101086410_278030740_371860981615650_8035331850562520420_n.jpg",
        // "https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBpY29uc3xlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1601592935678-406968278b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1590102426319-c7526718cd70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
    ]
    const containerRef = useRef(null)
    useEffect(()=>{
        const container:any = containerRef.current
        const scroll = () =>{
            if(container) {
                const distance = 1
                container.scrollLeft += distance
                if (container.scrollLeft >= limit) {
                    container.scrollLeft = 0
                }
                console.log(container.scrollLeft); 
                requestAnimationFrame(scroll)  
            }
        }
        requestAnimationFrame(scroll)
        return ()=>{
            
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
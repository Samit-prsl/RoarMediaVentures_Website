//"use client"
import React from 'react'
//import { useMediaQuery } from 'usehooks-ts'
export default function YtLink2Phone() {
  //const large = useMediaQuery('(min-width: 768px)')
  return (
    <div className=' flex justify-center items-center h-full my-6 p-8'>
      <iframe width="760" height="215" src="https://www.youtube.com/embed/IYSnENNyM0w?si=d_Jmu-kr_mQnYmEL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

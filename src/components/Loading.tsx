import React from 'react'
import Icon from './Icon'
import { SyncLoader } from 'react-spinners'
export default function Loading() {
  return (
    <div className=' min-h-screen bg-black flex flex-col justify-center items-center p-5 gap-8'>
        <Icon/>
        <SyncLoader color='red'/>
    </div>
  )
}

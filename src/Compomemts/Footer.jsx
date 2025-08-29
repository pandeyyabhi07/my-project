import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex gap-5 h-screen bg-zinc-900 p-20">
        <div className="w-1/2 h-full flex flex-col justify-between ">
       <div className="heading">
       <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-6'>EYE</h1>
        <h1  className='text-[7vw] font-semibold  uppercase leading-none -mb-6'>Opening</h1>

       </div>
       <h3 className='text-[4vw] font-semibold  uppercase leading-none -mb-6'>ochi.</h3>
        </div>

        
        <div className="w-1/2 ">
       <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-6'>
       presentations
</h1>

        </div>
    
    </div>
  )
}

export default Footer
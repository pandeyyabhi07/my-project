import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { Power4 } from 'gsap'

function Features() {
  const [isHovering,setHovering] = useState(false);
  const handleHover =()=>{
setHovering(true);
  }
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-x-zinc-700 pb-20'>
        <h1 className='text-8xl tracking-tighter'>
          Featured Project
        </h1>

        

        
      

      </div>

      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <div onMouseEnter={()=>handleHover()} onMouseLeave={()=>setHovering(false)} className='card rounded-xl relative  w-1/2 h-[75vh] '>
          <h1 className="absolute flex overflow-hidden  text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter leading-none text-8xl">
          {"FYDE".split('').map((item,index)=>(
          <motion.span initial={{y:"100%"}} animate={isHovering ? ({y:"0%"}) : ({y:"100%"})}
          transition={{ease:Power4.easeInOut, duration:0.5, delay: index * 0.1}}
          className='inline-block '>{item}</motion.span>))}</h1>
            <div className="cardd  rounded-xl w-full h-full overflow-hidden">
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
            </div>
          </div>
          <div className='card rounded-xl relative  w-1/2 h-[75vh] '>
          <h1 className="absolute  text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tighter leading-none text-8xl">
          {"VISE".split('').map((item,index)=><span className=''>{item}</span>)}</h1>

          <div className="cardd  rounded-xl w-full h-full overflow-hidden">
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Features
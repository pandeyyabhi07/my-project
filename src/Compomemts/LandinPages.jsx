import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
const LandinPages = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed ="-.8" className='w-full  h-screen bg-zinc-900 pt-1'>
<div className="textstructure mt-40 px-20">
   {["We create","Eye opening","presentation"]
   .map((item,index)=>{
    return(
        <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
                {index===1 && (
                    <motion.div initial={{width:0}} animate ={{width : "6vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="mr-[1vw] w-[8vh] rounded-md h-[5.7vh] -top-[0.4vh] relative bg-red-500"></motion.div>
                )}
<h1 className='pt-[2vw]  uppercase text-[9vh] leading-[.75] '>
     {/* font-['Founders_Grotesk_x-Condensed'] */}
    {item}
</h1>
            </div>
        </div>
    );
   }
)
   }
</div>
<div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
    {["For For public and private companies", "From the first pitch to IPO", ]
    .map((item,index)=>(
       <p className='text-md font-light tracking-tighter leading-none'>
{item}
       </p>

    ))}
<div className="start flex items-center gap-2">
  <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase'>
Start the project
  </div>
  <div className="w-10 h-10 border-[2px] border-zinc-500  rounded-full flex items-center justify-center">
    <span className='rotate-[45deg]'>
  <FaArrowUp />
  </span>
  </div>
</div>

</div>

    </div>
  )
}

export default LandinPages



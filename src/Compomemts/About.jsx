import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
 <h1 className='text-[3vw] leading-[4vw] tracking-tight'>
  {/* font-['Neue_Montreal '] */}
 Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
 </h1>



 <div className="w-full border-t-[1px] flex gap-5 mt-20 pt-10 border-[#616f2d]">


  <div className='w-1/2'>
  <h1 className='text-7xl '>
Our Approach
  </h1>
  <button className='px-10 py-6 uppercase flex gap-10 items-center  bg-zinc-900 mt-10 rounded-full text-white '>
Read More
<div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
  </button>
  </div>
  <div className='w-1/2 h-[70vh] rounded-3xl bg-[#8aa23b]'>

  </div>
  </div>



    </div>
    
  )
}

export default About
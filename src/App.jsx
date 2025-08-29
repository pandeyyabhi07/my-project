import React from 'react'
import Navbar from './Compomemts/Navbar'
import LandinPages from './Compomemts/LandinPages'
import Marquee from './Compomemts/Marquee'
import About from './Compomemts/About'
import Eyes from './Compomemts/Eyes'
import Features from './Compomemts/Features'
import Cards from './Compomemts/Cards'
import Footer from './Compomemts/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w=full min-h-screen bg-zinc-900 text-white'>

<Navbar />
<LandinPages />
<Marquee/>
<About/>
<Eyes/>
<Features/>
<Cards/>
<Footer/>
    </div>
  )
}

export default App
import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed ="-.3" className="w-full py-20 rounded-tl-3xl bg-[#004D43]">
      <div className="text  border-t-2  border-b-2 border-zinc-300 flex gap-20 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vh] leading-none font-semibold uppercase -mb-[-7vw] pt-10"
        >
          {/* font-['Founders_Grotesk_x-Condensed'] */}
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vh] leading-none font-semibold uppercase -mb-[-7vw] pt-10"
        >
          {/* font-['Founders_Grotesk_x-Condensed'] */}
          We are ochi
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vh] leading-none font-semibold uppercase -mb-[-7vw] pt-10"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;

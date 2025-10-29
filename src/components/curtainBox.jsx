import React from 'react'
import { motion as Motion } from 'motion/react'

const CurtainBox = ({ delay = 0, duration = 2 }) => {
  return (
    <Motion.div
      className='w-[10%] h-full bg-black'
      animate={{ y: [0, -400] }}
      transition={{
        duration: duration,
        ease: 'easeOut',
        delay: delay
      }}
    />
  )
}

export default CurtainBox

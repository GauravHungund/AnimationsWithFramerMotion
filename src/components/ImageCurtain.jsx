import React from 'react'
import CurtainBox from './curtainBox'
import Bg from '../assets/test.jpg'

const ImageCurtain = () => {
  const curtainParts = 10

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black'>
      <div
        className='w-[800px] h-[400px] border-2 border-black flex flex-row bg-cover bg-center overflow-hidden'
        style={{ backgroundImage: `url(${Bg})` }}
      >
        {[...Array(curtainParts)].map((_, i) => (
          <CurtainBox
            key={i}
            index={i}
            delay={(i / curtainParts) * 0.6} // spread total 1 second across all
            duration={0.4} // total animation lasts 2 seconds
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCurtain

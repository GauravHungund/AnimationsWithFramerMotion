import Boxanimations from './components/boxanimations'
import './App.css'
import RubixBlock from './components/rubixBlock'
import RubixGrid from './components/rubixGrid'
import ImageCurtain from './components/ImageCurtain'
import Flipbox from './components/flipbox'
import Flipboard from './components/flipboard'
// App.jsx (example)
import React from "react";
import PassageFlipboard from "./components/PassageFlipboard";
import TextRow from './components/textRow'
import MatrixRain from './components/matrix'

function App() {

  return (
    <div className='w-screen h-screen bg-black'>
      {/* <Boxanimations/> */}
      {/* <RubixBlock /> */}
      {/* <RubixGrid /> */}
      {/* <ImageCurtain /> */}
      {/* <Flipbox/> */}
      {/* <PassageFlipboard
        passage={"scu welcomes you to the hackathon!"}
        letterTick={65}           // speed of each tile's internal flipping
        perLetterStartGap={140}   // gap between starting S -> C -> U
        perWordGap={500}          // pause before next word begins
      /> */}
      {/* <TextRow /> */}
      <MatrixRain />
    </div>
  )
}

export default App

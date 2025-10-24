import React from "react";
import Box from "./rubixBlock"


const Grid3x3 = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="grid grid-cols-5 grid-rows-5 gap-0 border border-neutral-800">
        {[...Array(25)].map((_, i) => {
        const randomDelay = Math.random() * 3;        
        return(
          <div
            key={i}
            className="w-[100px] h-[100px]"
          >
            <Box delay={randomDelay}/>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Grid3x3;

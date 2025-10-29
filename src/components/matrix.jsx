import React, { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";
import TextRow from "./TextRow";

const MatrixRain = () => {
  const [numColumns, setNumColumns] = useState(0);

  useEffect(() => {
    // 🧮 calculate dynamically based on screen width
    const calculateColumns = () => {
      const columnWidth = 20; // px per column
      const columns = Math.floor(window.innerWidth / columnWidth);
      setNumColumns(columns);
    };

    calculateColumns();
    window.addEventListener("resize", calculateColumns);

    return () => window.removeEventListener("resize", calculateColumns);
  }, []);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden flex flex-row justify-start items-start">
      {Array.from({ length: numColumns }).map((_, i) => (
        <Motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: i * 0.1 + Math.random() * 0.3, // slight randomization for realism
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mx-[1px]"
        >
          <TextRow />
        </Motion.div>
      ))}
    </div>
  );
};

export default MatrixRain;

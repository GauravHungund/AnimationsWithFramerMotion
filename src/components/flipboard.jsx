import React from 'react';
import FlipBox from './flipbox';

export default function WordFlip({ word = "SCU" }) {
  return (
    <div className="flex justify-center items-center">
      {[...word].map((ch, i) => (
        <FlipBox key={i} target={ch} />
      ))}
    </div>
  );
}

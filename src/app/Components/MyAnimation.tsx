"use client";
import React, { useState } from "react";

interface MyAnimationProps{
    children : React.ReactNode;
}

export default function MyAnimation({children} : MyAnimationProps){
    const [chevron, setChevron] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);

  const elementStyles: React.CSSProperties = {
    /* Your initial styles here */
    transitionProperty: "transform",
    transitionTimingFunction: "ease-out",
    transitionDuration: "500ms",
    transform: `translateX(-${chevron * 100}%)`,
  };

  const prev = () => {
    setChevron((prevChevron) => (prevChevron === 0 ? React.Children.count(children) - 1 : prevChevron - 1));
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 2));
  };

  const next = () => {
    setChevron((prevChevron) => (React.Children.count(children) - 1 ? 0 : prevChevron + 1));
    setStartIndex((prevIndex) => Math.min(React.Children.count(children) - 2, prevIndex + 2));
  };

  return (
    <>
      <div className="education-icon" id="left" onClick={prev}>
        <img src="left-arrow.png" alt="left-arrow"></img>
      </div>
      <div className="MyAnimation" style={elementStyles}>
        {React.Children.toArray(children).slice(startIndex, startIndex + 2)}
      </div>
      <div className="education-icon" onClick={next} id="right">
        <img src="right-chevron.png" alt="right-chevron"></img>
      </div>
    </>
  );
}
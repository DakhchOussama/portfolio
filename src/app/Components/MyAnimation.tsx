"use client";
import React, { useState } from "react";

interface MyAnimationProps{
    children : React.ReactNode;
}

export default function MyAnimation({children} : MyAnimationProps){
    const [chevron, setchevron] = useState(0);
    const elementStyles = {
        /* Your initial styles here */
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-out',
        transitionDuration: '500ms',
        transform: `translateX(-${chevron * 25}%)`
      };

    const prev = () => {
        setchevron((chevron) => (chevron === 0 ? React.Children.count(children) - 2 : chevron - 2));
      };

    const next = () => {
        setchevron((chevron) => (chevron === React.Children.count(children) - 2 ?  0 : chevron + 2));
      };
    return(
        <>
        <div className="education-icon" id="left" onClick={prev}>
            <img src="left-arrow.png"></img>
        </div>
        <div className="MyAnimation">
            <div className="MyAnimation-child" style={elementStyles}>
                {children}
            </div>
        </div>
        <div className="education-icon" id="right" onClick={next}>
            <img src="right-chevron.png"></img>
        </div>
        </>
    )
}
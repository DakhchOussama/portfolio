"use client";
import React, { useCallback, useEffect, useState } from "react";

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

    const checkwidthpage_prev = useCallback(() => {
        if (window.innerWidth <= 796) {
          setchevron((chevron) =>
            chevron === 0 ? React.Children.count(children) - 1 : chevron - 1
          );
        } else {
          setchevron((chevron) =>
            chevron === 0 ? React.Children.count(children) - 2 : chevron - 2
          );
        }
      }, [children]);

    const checkwidthpage_next = useCallback(() => {
        if (window.innerWidth <= 796) {
          setchevron((chevron) =>
            chevron === React.Children.count(children) - 1 ? 0 : chevron + 1
          );
        } else {
          setchevron((chevron) =>
            chevron === React.Children.count(children) - 2 ? 0 : chevron + 2
          );
        }
      }, [children]);

    useEffect(() => {
        checkwidthpage_prev();
        checkwidthpage_next();
    }, [checkwidthpage_prev, checkwidthpage_next]);

    
    return(
        <>
        <div className="education-icon" id="left" onClick={checkwidthpage_prev}>
            <img src="left-arrow.png" alt="photo"></img>
        </div>
        <div className="MyAnimation">
            <div className="MyAnimation-child" style={elementStyles}>
                {children}
            </div>
        </div>
        <div className="education-icon" id="right" onClick={checkwidthpage_next}>
            <img src="right-chevron.png" alt="photo"></img>
        </div>
        </>
    )
}
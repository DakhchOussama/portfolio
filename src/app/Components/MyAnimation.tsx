"use client";
import React, { useEffect, useState } from "react";

interface MyAnimationProps{
    children : React.ReactNode;
}

export default function MyAnimation({children} : MyAnimationProps){
    useEffect(() => {
        checkwidthpage_prev();
        checkwidthpage_next();
    }, []);

    const [chevron, setchevron] = useState(0);
    const elementStyles = {
        /* Your initial styles here */
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-out',
        transitionDuration: '500ms',
        transform: `translateX(-${chevron * 25}%)`
      };

    const checkwidthpage_prev = () => {
        console.log('width : ', window.innerWidth);
        if (window.innerWidth <= 796 ){
            setchevron((chevron) => (chevron === 0 ? React.Children.count(children) - 1 : chevron - 1));  
        }
        else{
            setchevron((chevron) => (chevron === 0 ? React.Children.count(children) - 2 : chevron - 2)); 
        }
    }

    const checkwidthpage_next = () => {
        if (window.innerWidth <= 796){
            setchevron((chevron) => (chevron === React.Children.count(children) - 1 ?  0 : chevron + 1));
        }
        else{
            setchevron((chevron) => (chevron === React.Children.count(children) - 2 ?  0 : chevron + 2));    
        }
    }

    
    return(
        <>
        <div className="education-icon" id="left" onClick={checkwidthpage_prev}>
            <img src="left-arrow.png"></img>
        </div>
        <div className="MyAnimation">
            <div className="MyAnimation-child" style={elementStyles}>
                {children}
            </div>
        </div>
        <div className="education-icon" id="right" onClick={checkwidthpage_next}>
            <img src="right-chevron.png"></img>
        </div>
        </>
    )
}
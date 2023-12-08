"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Section from './Section'
import Feedbacks from './Feedbacks'
import Education from './Education'
import GetInTouch from './GetInTouch'
import CaseStudies from './CaseStudies'



export default function DisplayComponent(){
    const [index, setindex] = useState("");

    const handleSelectSection = (section: string) => {
      setindex(section);
    };
    return (
        <>
           <NavBar onSelectSection={handleSelectSection} ></NavBar>
           {index === 'home' ? (<Section></Section>) : (<Section></Section>)}
           {index === 'projects' ? (<CaseStudies></CaseStudies>) : (<CaseStudies></CaseStudies>)}
           {index === 'feedbacks' ? (<Feedbacks></Feedbacks>) : (<Feedbacks></Feedbacks>)}
           {index === 'education' ? (<Education></Education>) : (<Education></Education>)}
           {index === 'getintouch' ? (<GetInTouch></GetInTouch>) : (<GetInTouch></GetInTouch>)}
        
           
        </>
    )
}
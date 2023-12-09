"use client";
import React, { useRef, useState } from "react";
import CaseStudies from './CaseStudies';
import NavBar from './NavBar';
import Section from './Section';
import Feedbacks from './Feedbacks';
import Education from './Education';
import GetInTouch from './GetInTouch';

export default function DisplayComponent()
{
    const ref_section = useRef(null);
    const projects = useRef(null);
    const feedbacks = useRef(null);
    const education = useRef(null);
    const getintouch = useRef(null);

    const scrollToSection = (elementRef: any) =>
    {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    const handlescroll = (section: string) =>
    {
        if (section)
        {
            switch (section)
            {
                case "section":
                    scrollToSection(ref_section);
                    break;
                case "projects":
                    scrollToSection(projects);
                    break;
                case "feedbacks":
                    scrollToSection(feedbacks);
                    break;
                case "education":
                    scrollToSection(education);
                    break;
                case "getintouch":
                    scrollToSection(getintouch);
                    break;
            }
        }
    }

    return (
        <>
            
             <NavBar onSelectSection={handlescroll} ></NavBar>
            <div ref={ref_section}><Section></Section></div>
            <div ref={projects}><CaseStudies></CaseStudies></div>
            <div ref={feedbacks}><Feedbacks></Feedbacks></div>
            <div ref={education}><Education></Education></div>
            <div ref={getintouch}><GetInTouch></GetInTouch></div>
        </>
    );
}
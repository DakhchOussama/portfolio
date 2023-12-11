"use client";
import React from "react";
import MyAnimation from "./MyAnimation";

export default function Education(){
    const slides = [
        <div className="education-information" key="1">
            <div className="education-img">
                <img src="ensanewlogo.png" alt="photo"></img>
            </div>
            <div className="education-para">
                <h2>National School of Applied Sciences</h2>
                <p>During my time at this school, I dedicated a year to pursuing studies in computer science, specializing in |génie informatique|.<br></br> Notably, I worked on my second PFE at this institution. The project focused on capturing temperature using a Raspberry Pi and transmitting this data to a mobile app.<br></br> I also successfully obtained my first diploma, DEUT (Diplôme Universitaire de Technologie)</p>
                <a href="http://www-ensab.uh1.ac.ma/" target="_blank">Know more</a>
            </div>
        </div>,
        <div className="education-information" key="2">
            <div className="education-img">
                <img src="1337.jpg" alt="photo"></img>
            </div>
            <div className="education-para">
                <h2>School of Software Engineering 1337</h2>
                <p id="school-para">1337 is my learning hub, where I honed coding skills and acquired knowledge. In two transformative years, I mastered programming languages and engaged in collaborative projects, shaping my technical acumen. 1337 is more than an institution; it is a defining chapter that influenced my skills and ignited a passion for software development.</p>
                <a href="https://1337.ma/en/" target="_blank">Know more</a>
            </div>
        </div>,
        <div className="education-information" key="3">
            <div className="education-img">
                <img src="sidibn.png" alt="photo"></img>
            </div>
            <div className="education-para">
                <h2>École Supérieure de Technologie</h2>
                <p id="education-p">This is my first station into programming and coding. It is not my best year, but it serves as the foundation where I learned the fundamentals of coding, device operations, mathematics, and algorithms. This education laid the groundwork, offering a crucial understanding of programming is core principles for my subsequent ventures.</p>
                <a href="https://www.estsb.ucd.ac.ma/">Know more</a>
            </div>
        </div>,
        <div className="education-information" key="4">
            <div className="education-img">
                <img src="UniversitéCasablanca.png" alt="photo"></img>
            </div>
            <div className="education-para">
                <h2>Université Hassan II of Casablanca</h2>
                <p id="eco-para">After my baccalaureate, I initially chose to study economics at Université Hassan II of Casablanca without a clear direction. However, upon entering this field, I realized it was not the right fit for me. Despite this, the experience provided valuable knowledge, particularly in teamwork and probability, which I continue to apply in my current educational and professional endeavors.</p>
                <a href="https://www.univh2c.ma/" target="_blank">Know more</a>
            </div>
        </div>
    
    ]
    return (
        <>
            <div className="education" id="test">
                <div className="education-container">
                    <div className="education-header">
                        <h1>Education</h1>
                        <p>Since I started my education in 2017 after completing my baccalaureate, the passing years have been a broad canvas of experiences. Beyond the world of academics, I have explored the details of life, gaining valuable insights and refining my survival skills. This prolonged period of learning has not only developed my skills in programming but has also been a journey of personal and professional development.</p>
                    </div>
                    <div className="education-section">
                        <MyAnimation>
                          {slides.map((slide, index) => (
                            <React.Fragment key={index}>
                              {slide}
                            </React.Fragment>
                          ))}
                        </MyAnimation>
                    </div>
                </div>
            </div>
        </>
    );
}
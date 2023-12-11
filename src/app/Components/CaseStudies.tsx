"use client";
import React from "react";

export default function CaseStudies(){
    
    return (
        <>
            <div className="CaseStudies-section">
                <div className="CaseStudies-container">
                    <div className="CaseStudies-header">
                        <h1>Projects</h1>
                        <p>In two impactful years at school 1337, I immersed myself in diverse projects and languages. From developing Projects in C to mastering C++, , Html, CSS, JS, TS, React, Next.js, Nest.js, and Docker, I honed my coding and problem-solving skills. Beyond languages, collaborative projects nurtured effective teamwork, issue resolution, and timely deliveries. This tech journey defined my transformative learning experience.</p>
                    </div>
                    <div className="CaseStudies-project1" id="CaseStudies-project-first">
                        <div className="CaseStudies-project1-left">
                            <div className="CaseStudies-lang">
                                <div className="lang" id="docker">
                                    <p>C++</p>
                                </div>
                            </div>
                            <div className="CaseStudies-project1-information">
                                <h2>FT_IRC</h2>
                                <p>Designed and implemented an Internet Relay Chat (IRC) server using C++ language, socket programming. Create clients and channels and let them to connect to each other</p>
                            </div>
                            <a href="https://github.com/iel-bakk/42-FT_IRC" target="_blank">View in github<img src="social.png" alt="photo"></img></a>
                        </div>
                        <div className="CaseStudies-project1-right">
                            <video loop muted autoPlay id="irc-video">
                                <source src="ircserver.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    {/* project 2 */}
                    <div className="CaseStudies-project1" id="CaseStudies-different">
                        <div className="CaseStudies-project1-right">
                            <video loop muted autoPlay>
                                <source src="mycub3d.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="CaseStudies-project1-left" id="CaseStudies-different-right">
                        <div className="CaseStudies-lang">
                            <div className="lang" id="c">
                            <p>C</p>
                            </div>
                        </div>
                        <div className="CaseStudies-project1-information">
                            <h2>Cub3D</h2>
                            <p>This project involved creating a 3D game using the C programming language and the raycasting technique. Through this experience, I gained a deep understanding of graphics programming, including concepts like textures, floor and ceiling rendering, and player movement. The project not only honed my coding skills but also fostered problem-solving abilities as I tackled complex challenges in creating a visually engaging and interactive game.</p>
                        </div>
                            <a href="https://github.com/DakhchOussama/Cub3d" target="_blank" id="btn-cub">View in github<img src="social.png" alt="photo"></img></a>
                        </div>
                    </div>
                    {/* project 3 */}
                    <div className="CaseStudies-project1">
                        <div className="CaseStudies-project1-left">
                        <div className="transcendance-lang">
                            <div className="lang" id="html"><p>html</p></div>
                            <div className="lang" id="css"><p>Css</p></div>
                            <div className="lang" id="js"><p>JS</p></div>
                            <div className="lang" id="ts"><p>TS</p></div>
                            <div className="lang" id="react"><p>React</p></div>
                            <div className="lang" id="next"><p>Next</p></div>
                            <div className="lang" id="nest"><p>Nest</p></div>
                            <div className="lang" id="docker"><p>docker</p></div>
                        </div>
                            <div className="CaseStudies-project1-information">
                                <h2>Ft_Transcendence</h2>
                                <p>Developed a ping pong game with front-end and back-end frameworks, integrating user registration, login, and chat features, along with an interactive game space. Personally contributed to the project by designing the UI for the project and working on profile pages, user addition, and specific front-end pages within the chat functionality.</p>
                            </div>
                            <a href="https://github.com/soufiane-amt/ft_transcendance" target="_blank" id="btn-tran" >View in github<img src="social.png" alt="photo"></img></a>
                        </div>
                        <div className="CaseStudies-project1-right">
                            <video loop muted autoPlay>
                                <source src="pingpong.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
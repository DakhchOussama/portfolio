import React from "react";

export default function CaseStudies(){
    return (
        <>
            <div className="CaseStudies-section">
                <div className="CaseStudies-container">
                    <div className="CaseStudies-header">
                        <h1>Projects</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores at odio accusamus ex consequuntur delectus, aliquam explicabo ipsum, modi, cupiditate non perspiciatis nulla ea laboriosam id aperiam nostrum nam?</p>
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
                                <p>Designed and implemented an Internet Relay Chat (IRC) server using C++ language, socket programming. And Developed skills in problem-solving, critical thinking, and communication through peer reviews and code debugging sessions.</p>
                            </div>
                            <a href="https://github.com/iel-bakk/42-FT_IRC" target="_blank">View case study</a>
                        </div>
                        <div className="CaseStudies-project1-right">
                            <img src="limechat-2.png"></img>
                        </div>
                    </div>
                    {/* project 2 */}
                    <div className="CaseStudies-project1" id="CaseStudies-different">
                        <div className="CaseStudies-project1-right">
                            <img></img>
                        </div>
                        <div className="CaseStudies-project1-left" id="CaseStudies-different-right">
                        <div className="CaseStudies-lang">
                            <div className="lang" id="c">
                            <p>C</p>
                            </div>
                        </div>
                        <div className="CaseStudies-project1-information">
                            <h2>Cub3D</h2>
                            <p>Designed and implemented an Internet Relay Chat (IRC) server using C++ language, socket programming. Developed skills in problem-solving, critical thinking, and communication through peer reviews and code debugging sessions.</p>
                        </div>
                            <button id="view2">View case study </button>
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
                                <p>Developed a comprehensive Dashboard with front-end and back-end components, featuring user registration, login, profile pages, chat functionality, and an interactive game space. Collaborated with a team of peers to manage project tasks, resolve issues, and ensure timely project completion</p>
                            </div>
                            <button id="transcendance-btn">View case study </button>
                        </div>
                        <div className="CaseStudies-project1-right">
                            <img src="ft_transcendance.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
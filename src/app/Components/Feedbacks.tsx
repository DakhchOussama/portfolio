"use client";
import React from "react";

export default function Feedbacks(){
    return(
        <>
            <div className="feedbacks">
                <div className="feedbacks-container">
                    <div className="feedbacks-header">
                        <h1>Feedbacks</h1>
                        <p>In the dynamic environment of school 1337, my peers provided constructive feedback that emphasized my effective teamwork, problem-solving, and project management skills. Their insights have been instrumental in shaping my learning journey and contributing to a positive collaborative atmosphere within the school community.</p>
                    </div>
                    <div className="feedbacks-section">
                        {/* 1 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" alt="photo"></img>
                            </div>
                            <div className="feedbacks-msg-container">
                                <div className="feedbacks-msg">
                                    <p> perfect ui designe the game was also smooth noting to add more gd luck guys</p>
                                </div>
                                <div className="feedbacks-identif">
                                    <img src="man.png" alt="photo"></img>
                                    <h2>aelbrahm</h2>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" alt="photo"></img>
                            </div>
                            <div className="feedbacks-msg-container">

                            <div className="feedbacks-msg">
                                <p id="abberkac-feedback"> great job guys, the web site work flexibly, the game and chat also works perfect, I like the waiting animation, good luck </p>
                            </div>
                            <div className="feedbacks-identif" id="feedbacks-change-margin">
                                <img src="man(1).png" alt="photo"></img>
                                <h2>abberkac</h2>
                            </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" alt="photo"></img>
                            </div>
                            <div className="feedbacks-msg-container">
                            <div className="feedbacks-msg">
                                <p> Great effort putted into the project, well explained! Tbarklah 3likom </p>
                            </div>
                            <div className="feedbacks-identif">
                                <img src="man(2).png" alt="photo"></img>
                                <h2>hel-mamo</h2>
                            </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" alt="photo"></img>
                            </div>
                            <div className="feedbacks-msg-container">
                            <div className="feedbacks-msg">
                                <p> Good explanation every thing was clear good luck for your next projects too :3 </p>
                            </div>
                            <div className="feedbacks-identif">
                                <img src="woman.png" alt="photo"></img>
                                <h2>ssadiki</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
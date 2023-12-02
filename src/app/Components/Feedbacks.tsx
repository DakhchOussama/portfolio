"use client";
import React from "react";

export default function Feedbacks(){
    return(
        <>
            <div className="feedbacks">
                <div className="feedbacks-container">
                    <div className="feedbacks-header">
                        <h1>Feedbacks</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae voluptas at iste corrupti rerum alias veritatis, aut officiis qui recusandae ab maxime itaque architecto incidunt animi sapiente harum accusantium.</p>
                    </div>
                    <div className="feedbacks-section">
                        {/* 1 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" id="another-quote"></img>
                            </div>
                            <div className="feedbacks-msg">
                                <p> perfect ui designe the game was also smooth noting to add more gd luck guys</p>
                            </div>
                            <div className="feedbacks-identif">
                                <img src="man.png"></img>
                                <h2>aelbrahm</h2>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" id="left-top"></img>
                            </div>
                            <div className="feedbacks-msg">
                                <p id="abberkac-feedback"> great job guys, the web site work flexibly, the game and chat also works perfect, I like the waiting animation, good luck </p>
                            </div>
                            <div className="feedbacks-identif">
                                <img src="man(1).png"></img>
                                <h2>abberkac</h2>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" id="right-bottom"></img>
                            </div>
                            <div className="feedbacks-msg">
                                <p> Great effort putted into the project, well explained! Tbarklah 3likom </p>
                            </div>
                            <div className="feedbacks-identif">
                                <img src="man(2).png"></img>
                                <h2>hel-mamo</h2>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="feedbacks-poeple">
                            <div className="container-quote">
                                <img className="quote" src="quote.png" id="left-bottom"></img>
                            </div>
                            <div className="feedbacks-msg">
                                <p> Good explanation every thing was clear good luck for your next projects too :3 </p>
                            </div>
                            <div className="feedbacks-identif">
                                <img src="woman.png"></img>
                                <h2>ssadiki</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
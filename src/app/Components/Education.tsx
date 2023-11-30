import React from "react";

export default function Education(){
    return (
        <>
            <div className="education">
                <div className="education-container">
                    <div className="education-header">
                        <h1>Education</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae voluptas at iste corrupti rerum alias veritatis, aut officiis qui recusandae ab maxime itaque architecto incidunt animi sapiente harum accusantium.</p>
                    </div>
                    <div className="education-section">
                        <div className="education-icon">
                            <img src="right-chevron.png"></img>
                        </div>
                        {/* 1 */}
                        <div className="education-information">
                            <div className="education-img">
                                <img></img>
                            </div>
                            <div className="education-para">
                                <h2>Université Hassan II of Casablanca</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque a tenetur doloribus consequatur? Quas quae rerum beatae vel! Aliquid magnam cum, unde itaque ipsum laudantium modi incidunt dolor earum vero.</p>
                                <a>Know more</a>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="education-information">
                            <div className="education-img">
                                <img></img>
                            </div>
                            <div className="education-para">
                                <h2>National School of Applied Sciences</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora praesentium odio sed id fugit iste vitae magni. Facilis, nobis distinctio, repellat eligendi ea vitae totam quod explicabo officia ab asperiores!</p>
                                <a>Know more</a>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="education-information">
                            <div className="education-img">
                                <img></img>
                            </div>
                            <div className="education-para">
                                <h2>School of Software Engineering 1337</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore voluptas, quis cum enim consequuntur quasi veniam provident vel accusantium ratione aspernatur, animi earum ab possimus quia! Commodi, similique delectus!</p>
                                <a>Know more</a>
                            </div>
                        </div>
                        <div className="education-icon">
                            <img src="right-chevron.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
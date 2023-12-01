import React from "react";
import MyAnimation from "./MyAnimation";

export default function Education(){
    const slides = [
        <div className="education-information">
            <div className="education-img">
                <img src="Université-Casablanca.png"></img>
            </div>
            <div className="education-para">
                <h2>Université Hassan II of Casablanca</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore voluptas, quis cum enim consequuntur quasi veniam provident vel accusantium ratione aspernatur, animi earum ab possimus quia! Commodi, similique delectus!</p>
                <a href="https://www.univh2c.ma/" target="_blank">Know more</a>
            </div>
        </div>,
        <div className="education-information">
            <div className="education-img">
                <img src="1337.jpg"></img>
            </div>
            <div className="education-para">
                <h2>School of Software Engineering 1337</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore voluptas, quis cum enim consequuntur quasi veniam provident vel accusantium ratione aspernatur, animi earum ab possimus quia! Commodi, similique delectus!</p>
                <a href="https://1337.ma/en/" target="_blank">Know more</a>
            </div>
        </div>,
        <div className="education-information">
            <div className="education-img">
                <img></img>
            </div>
            <div className="education-para">
                <h2>School of Software Engineering 1337</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore voluptas, quis cum enim consequuntur quasi veniam provident vel accusantium ratione aspernatur, animi earum ab possimus quia! Commodi, similique delectus!</p>
                <a>Know more</a>
            </div>
        </div>,
        <div className="education-information">
            <div className="education-img">
                <img src="logo2.png"></img>
            </div>
            <div className="education-para">
                <h2>National School of Applied Sciences</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore voluptas, quis cum enim consequuntur quasi veniam provident vel accusantium ratione aspernatur, animi earum ab possimus quia! Commodi, similique delectus!</p>
                <a href="http://www-ensab.uh1.ac.ma/" target="_blank">Know more</a>
            </div>
        </div>
    ]
    return (
        <>
            <div className="education">
                <div className="education-container">
                    <div className="education-header">
                        <h1>Education</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae voluptas at iste corrupti rerum alias veritatis, aut officiis qui recusandae ab maxime itaque architecto incidunt animi sapiente harum accusantium.</p>
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
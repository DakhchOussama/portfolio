import React from "react";

export default function GetInTouc(){
    return (
        <>
            <div className="education" id="GetInTouc">
                <div className="education-container">
                    <div className="education-header">
                        <h1 id="GetInTouc-header">Get In Touc</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quae voluptas at iste corrupti rerum alias veritatis, aut officiis qui recusandae ab maxime itaque architecto incidunt animi sapiente harum accusantium.</p>
                    </div>
                    <div className="GetInTouc-container">
                        <div className="GetInTouc-input">
                            <label htmlFor="mail">Email</label>
                            <input type="email" placeholder="Please enter your email" id="mail"></input>
                        </div>
                        <div className="GetInTouc-input">
                            <label htmlFor="mobilr">Mobile</label>
                            <input type="text" placeholder="Enter mobile" id="mobile"></input>
                        </div>
                        <div className="GetInTouc-input" id="GetInTouc-message">
                            <label htmlFor="message">Message</label>
                            <textarea placeholder="Message" id="message"></textarea>
                        </div>
                        <div className="GetInTouc-buttom">
                            <div className="submit-button">
                                <a>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
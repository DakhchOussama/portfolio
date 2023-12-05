import React from "react";

export default function GetInTouc(){
    return (
        <>
            <div className="education" id="GetInTouc">
                <div className="education-container">
                    <div className="education-header">
                        <h1 id="GetInTouc-header">Get In Touch</h1>
                        <p>I welcome your inquiries, ideas, and collaboration opportunities. Whether you have questions, feedback, or wish to explore potential partnerships, this is your direct pathway to communicate with me. Your thoughts matter, and I look forward to hearing from you.</p>
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
                            <div className="identification-center-buttom">
                                <a className="button-link" data-text="Submit" id="GetInTouc-a">
                                <span>T</span>
                                <span>h</span>
                                <span>a</span>
                                <span>n</span>
                                <span>k</span>
                                <span>s</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
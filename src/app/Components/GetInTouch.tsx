"use client";
import React, { useState } from "react";

export default function GetInTouc(){
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const handleclick = async (event : any) => {
        event.preventDefault();

        try{
            const response = await fetch('/api/router', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({email, mobile, message})
            });

            console.log('API response:', response);

            if (response.ok){
                console.log('Email was send');
            }
            else{
                console.log('Failed to send email');
            }
        }catch(error){
            console.log('Error: ', error);
        }
    };
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
                            <input type="email" placeholder="Please enter your email" id="mail" value={email} onChange={(e) => {setEmail(e.target.value)}} required></input>
                        </div>
                        <div className="GetInTouc-input">
                            <label htmlFor="mobilr">Mobile</label>
                            <input type="text" placeholder="Enter mobile" id="mobile" value={mobile} onChange={(e) => {setMobile(e.target.value)}} required></input>
                        </div>
                        <div className="GetInTouc-input" id="GetInTouc-message">
                            <label htmlFor="message">Message</label>
                            <textarea placeholder="Message" id="message" value={message} onChange={(e) => {setMessage(e.target.value)}} required></textarea>
                        </div>
                        <div className="GetInTouc-buttom">
                            <div className="identification-center-buttom">
                                <form>
                                    <a className="button-link" data-text="Submit" id="GetInTouc-a" onClick={handleclick}>
                                    <span>T</span>
                                    <span>h</span>
                                    <span>a</span>
                                    <span>n</span>
                                    <span>k</span>
                                    <span>s</span>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
"use client";
import React from "react";

export default function NavBar()
{
    return (
        <>
            <nav>
                <div className="navbar-back">
                    <div className="navbar-parent">
                        <div className="navbar-parent-left">
                            <a>Home</a>
                            <a>Case Studies</a>
                            <a>Testimonials</a>
                            <a>Recent work</a>
                            <a>Get In Touch</a>
                        </div>
                        <div className="navbar-parent-right">
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=100004990874791"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/facebook/facebook-original.svg" alt="facebook" width="40" height="40"/></a>
                            <a target="_blank" href="https://github.com/DakhchOussama"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40"/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/oussama-dakhch-608964257/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" alt="linkedin" width="40" height="40"/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
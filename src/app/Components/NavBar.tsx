"use client";
import Link from "next/link";
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
                            <a>Projects</a>
                            <a>Feedbacks</a>
                            <a>Education</a>
                            <a>Get In Touch</a>
                        </div>
                        <div className="navbar-parent-right">
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=100004990874791"><img src="facebook.png" alt="facebook" width="35" height="35"/></a>
                            <a target="_blank" href="https://github.com/DakhchOussama"><img src="github.png" alt="github" width="35" height="35"/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/oussama-dakhch-608964257/"><img src="linkedin.png" alt="linkedin" width="35" height="35"/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
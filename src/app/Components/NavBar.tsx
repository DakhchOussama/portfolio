"use client";
import React from "react";

interface NavBarProp{
    onSelectSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProp> = ({onSelectSection}) =>
{
    return (
        <>
            <nav>
                  <div className="navbar-back">
                      <div className="navbar-parent">
                          <div className="navbar-parent-left">
                              <a onClick={() => onSelectSection("section")}>Home</a>
                              <a onClick={() => onSelectSection("projects")}>Projects</a>
                              <a onClick={() => onSelectSection("feedbacks")}>Feedbacks</a>
                              <a onClick={() => onSelectSection("education")}>Education</a>
                              <a onClick={() => onSelectSection("getintouch")}>Get In Touch</a>
                          </div>
                          <div className="navbar-parent-right">
                              <a target="_blank" href="https://twitter.com/DakhchO"><img src="twitter.png" alt="twitter" width="35" height="35"/></a>
                              <a target="_blank" href="https://github.com/DakhchOussama"><img src="github.png" alt="github" width="35" height="35"/></a>
                              <a target="_blank" href="https://www.linkedin.com/in/oussama-dakhch-608964257/"><img src="linkedin.png" alt="linkedin" width="35" height="35"/></a>
                          </div>
                      </div>
                  </div>
            </nav>
        </>
    );
};

export default NavBar;
// @ts-ignore
import React from "react";

export default function Section(){
    
    return (
        <>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
        {/* <script src="three.r134.min.js"></script>
            <script src="vanta.net.min.js"></script>
            <script>
            VANTA.NET({
              el: ".identication",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00
        })
        </script> */}
            <div className="identication">
                <div className="identification-center">
                    <div className="identification-center-name">
                        <div className="identification-center-name1">
                        <h1>Oussama Dakhch</h1>
                        <p>My name is <span>Oussama Dakhch</span>, and I work as a Software Developer. I am deeply passionate about technology and enjoy crafting innovative solutions for complex problems. Known for my hardworking and dedicated nature, I am always eager to acquire new skills and techniques</p>
                        </div>
                        <div className="identification-center-buttom">
                            <a className='button-link' href='#'>
                            <span>T</span>
                            <span>H</span>
                            <span>A</span>
                            <span>N</span>
                            <span>K</span>
                            <span>S</span>
                            <p>Hover me</p>
                            </a>
                        </div>
                    </div>
                    <div className="identification-center-photo">
                        <img src="mypicture.jpg"></img>
                    </div>

                </div>

            </div>
        </>
    )
};
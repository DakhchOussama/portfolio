"use client";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function ScroolToTop() 
{
    const [clickbutton, setclickbutton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700)
            setclickbutton(true);
        else
            setclickbutton(false);
        });
    }, []);

    const handleclick = () => 
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };
    return(
        <div className="scroll-page">
            {clickbutton && <FaAngleDoubleUp className="angledoub" onClick={handleclick} size={30}/>}
        </div>
    )
}
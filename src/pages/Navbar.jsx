import { useState } from "react"
import { Link, useMatch , useResolvedPath } from "react-router-dom"
const Navbar = (()=>{
    const [responsive , setresponsive] = useState(null)
    const reschange = (()=>{
        if (responsive === null) {
            setresponsive(1)
        }else{
            setresponsive(null)
        }
    })
    const [isHovered, setHovered] = useState(false);
    return(
        <nav className="nav">
            <ul className="nav-lists">
                <li>خانه</li>
                <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>خدمات</li>
                {isHovered && (
                    <ul className="nav-list-hover" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <ol>ویژه</ol>
                    <ol>تعرفه</ol>
                    <ol>شرکت ها</ol>
                    </ul>
                )}
                <li>تعرفه</li>
                <li>خدمات</li>
                <li>تعرفه</li>
                <li>خدمات</li>
                <li>تعرفه</li>
                <li>خدمات</li>
                <li>ورود</li>
            </ul>
        </nav>
    )
})

export default Navbar;
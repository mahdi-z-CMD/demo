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
    return(
        <nav className="nav">
            <Link to="demo" className="site-title">Logo</Link>
                <img src={responsive === 1 ? "https://img.icons8.com/ios-filled/100/delete-sign--v1.png": "https://img.icons8.com/ios/50/menu--v1.png"} alt="menu--v1" className="login-area-icon" onClick={reschange}/>
            <ul className={responsive === null ? "login-area" : "login-area-show"}>
                <li><Link to="/more/" className="login-btn"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="long-arrow-left" className="icon-nav"/>ورود</Link></li>
                <li><Link to="/login/" className="tarefe-btn"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/rocket.png" alt="rocket" className="icon-nav"/>تعرفه اشتراک ها</Link></li>
            </ul>
        </nav>
    )
})

export default Navbar
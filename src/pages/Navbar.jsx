import { Link, useMatch , useResolvedPath } from "react-router-dom"
import leftArrow from '../svgs/left-arrow.svg'
import search from '../svgs/search.svg'
import space from '../svgs/space-rocket.svg'
export default function Navbar(){
    
    return(
        <nav className="nav">
            <Link to="/demo" className="site-title">Logo</Link>
            <ul className="khadamat-area">
               <Customurl to="/demo/amar" >آمار تجارت</Customurl>
                <Customurl to="/demo/rahhal" >راه حل ها</Customurl>
                <Customurl to="/demo/khadamat" >خدمات</Customurl>
            </ul>
            <ul className="login-area">
               <img src={leftArrow} alt="left-arrow" className="icon-nav"/> <Customurl to="/demo/more" className="login-btn">ورود</Customurl>
                <img src={space} alt="space-rocket" className="icon-nav"/><Customurl to="/demo/login" className="tarefe-btn">تعرفه اشتراک ها</Customurl>
            </ul>
        </nav>
    )
}
function Customurl({to, children , ...prop}){
    const resolve = useResolvedPath(to)
    const isactive = useMatch({ path: resolve.pathname, end: true})

    return(
        <li className={isactive ? "active" : ""}>
            <Link to={to} {...prop}>
                {children}</Link>
        </li>
    )
}
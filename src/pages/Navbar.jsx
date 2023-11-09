import { Link, useMatch , useResolvedPath } from "react-router-dom"
import leftArrow from '../svgs/left-arrow.svg'
import search from '../svgs/search.svg'
import space from '../svgs/space-rocket.svg'
export default function Navbar(){
    
    return(
        <nav className="nav">
            <Link to="/" className="site-title">Logo</Link>
            {/* <Link to="/search" className="search-btn"><input type="text" placeholder="جستجو در" className="search-btn"/></Link> */}
            {/* <img src={search} alt="search-icon" className="icon-nav-search"/> */}
            <ul className="khadamat-area">
               <Customurl to="/amar" >آمار تجارت</Customurl>
                <Customurl to="/rahhal" >راه حل ها</Customurl>
                <Customurl to="/khadamat" >خدمات</Customurl>
            </ul>
            <ul className="login-area">
               <img src={leftArrow} alt="left-arrow" className="icon-nav"/> <Customurl to="/more" className="login-btn">ورود</Customurl>
                <img src={space} alt="space-rocket" className="icon-nav"/><Customurl to="/login" className="tarefe-btn">تعرفه اشتراک ها</Customurl>
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
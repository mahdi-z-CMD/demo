import { Link, useMatch , useResolvedPath } from "react-router-dom"
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
                <Customurl to="/demo/more" className="login-btn"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="long-arrow-left" className="icon-nav"/>ورود</Customurl>
                <Customurl to="/demo/login" className="tarefe-btn"><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/rocket.png" alt="rocket" className="icon-nav"/>تعرفه اشتراک ها</Customurl>
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
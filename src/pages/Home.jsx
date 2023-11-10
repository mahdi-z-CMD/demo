import { useState } from "react"
import search from '../svgs/search.svg'
import { Link } from 'react-router-dom'
import data from './companytest.json'
import dataperson from './persontest.json'
import arrowdown from './chevron-down-outline.svg'
import arrowup from './chevron-up.svg'
// import data from '../companyjs.json'
export default function Login() {
    const [query, setQuery] = useState("")
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [selected, setSelected] = useState(2);
    const [adad, setAdad] = useState(0)
    let ihastam = 0
    const onChange1 = () => {
        setInputValue1(inputValue1)
        setSelected(1)
    };
    const onChange2 = () => {
        setInputValue2(inputValue2)
        setSelected(2)
    };
    const changelist = () =>{
        if (adad < 2) {
            setAdad(adad + 1)
            console.log(adad)
        }else{
            setAdad(adad - 1)
        }
    }
    return(
        <>
        <div className="container">
            <div className="container-texts">
                <h2>جایی برای ارتباط و تحلیل کسب و کار ها</h2>
                <p className="p1">اطلاعات رسمی تمام شرکت های ثبت شده و افراد مرتبط 
در ایران و امارات متحده عربی را میتوانید یکجا ببنید</p>
                <p className="p2">این داده هایی است که می توانید به آن اعتماد کنید.</p>
            </div>
        </div>
        <div className="searchbox">
                <img src={search} alt="Search icon" className="search-icon"/>
                <input type="text" placeholder="جست و جو برای شرکت ها و اشخاص " className="search-btn-home" onChange={e => setQuery(e.target.value)}/>
                <select id="country" name="Country">
                    <option value="none">کشور را انتخاب کنید</option>
                    <option value="iran">Iran</option>
                    <option value="uae">United Arab Emirates</option>
                </select>
            </div>
            <div className="cat">
            <input type="radio" value="ashkhas" name="cat" className="rb2" checked={selected === 1} onChange={onChange1}/> اشخاص
            <input type="radio" value="sherkatha" name="cat" className="rb1" checked={selected === 2} onChange={onChange2}/> شرکت ها
            </div>
        <div className="result-section">
            <ul className='search-result'>
        {
            selected === 2
            ?
                data.filter((item)=>{
                    return query.toLowerCase() === ''
                    ? null
                    : item.summary.companySummary.title.toLowerCase().includes(query)
                }).map((key)=>{
                    if (adad === 0) {
                        if (ihastam === 3) {
                        }else{
                            ihastam = ihastam + 1
                            return(
                                <li>
                                <Link to={`/demo/company/${key.summary.companySummary.id}`} className='Links'>
                                    <Cardcompany name={key.summary.companySummary.title} id={key.summary.companySummary.id} status={key.summary.companySummary.summary.status}></Cardcompany>
                                </Link>
                                </li>
                            )
                        }
                    }else if(adad === 1){
                        if (ihastam === 6) {
                        }else{
                            ihastam = ihastam + 1
                            return(
                                <li>
                                <Link to={`/demo/company/${key.summary.companySummary.id}`} className='Links'>
                                    <Cardcompany name={key.summary.companySummary.title} id={key.summary.companySummary.id} status={key.summary.companySummary.summary.status}></Cardcompany>
                                </Link>
                                </li>
                            )
                        }
                    }else if(adad === 2){
                        if (ihastam === 9) {
                        }else{
                            ihastam = ihastam + 1
                            return(
                                <li>
                                <Link to={`/demo/company/${key.summary.companySummary.id}`} className='Links'>
                                    <Cardcompany name={key.summary.companySummary.title} id={key.summary.companySummary.id} status={key.summary.companySummary.summary.status}></Cardcompany>
                                </Link>
                                </li>
                            )
                        }
                    }
                })
            : dataperson.filter((item)=>{
                return query.toLowerCase() === ''
                ? null
                : item.person.title.toLowerCase().includes(query)
            }).map((key)=>{
                if (adad === 0) {
                    if (ihastam === 3) {
                    }else{
                        ihastam = ihastam + 1
                        return(
                            <li>
                            <Link to={`/demo/person/${key.person.id}`} className='Links'>
                                <Cardperson name={key.person.title} id={key.person.id} status={key.person.biography.nationalId}></Cardperson>
                            </Link>
                            </li>
                        )
                    }
                }else if(adad === 1){
                    if (ihastam === 6) {
                    }else{
                        ihastam = ihastam + 1
                        return(
                            <li>
                            <Link to={`/demo/person/${key.person.id}`} className='Links'>
                                <Cardperson name={key.person.title} id={key.person.id} status={key.person.biography.nationalId}></Cardperson>
                            </Link>
                            </li>
                        )
                    }
                }else if(adad === 2){
                    if (ihastam === 9) {
                    }else{
                        ihastam = ihastam + 1
                        return(
                            <li>
                            <Link to={`/demo/person/${key.person.id}`} className='Links'>
                                <Cardperson name={key.person.title} id={key.person.id} status={key.person.biography.nationalId}></Cardperson>
                            </Link>
                            </li>
                        )
                    }
                }
                
            })
        }
        <img src={adad < 2 ? arrowup : arrowdown} alt="down" className="more-btn" onClick={changelist}/>
        </ul>
        <Filterarea></Filterarea>
        </div>
        </>
    )
}
function Cardcompany(props){
    return(
        <div className='Cards'>
        <span className="spans">نام کمپانی  : {props.name}</span>
        <span className="spans">شناسه  : {props.id}</span>
        <span className="spans">وضعیت  : {props.status}</span>
        </div>
    )
}
function Cardperson(props){
    return(
        <div className='Cards'>
        <span className="spans">نام  : {props.name}</span>
        <span className="spans">شناسه  : {props.id}</span>
        <span className="spans">کد ملی  : {props.status}</span>
        </div>
    )
}
function Filterarea(){
    return(
        <div className="Filters">
            <div className="header-fiter">
            <h1>فیلترها</h1>
            <h3>حذف همه</h3>
            </div>
            <div className="options">
                <h3>اطلاعات ثبتی و تماس</h3>
                <h3>اطلاعات ثبتی و تماس</h3>
                <h3>اطلاعات ثبتی و تماس</h3>
                <h3>اطلاعات ثبتی و تماس</h3>
                <h3>اطلاعات ثبتی و تماس</h3>
            </div>
        </div>
    )
}
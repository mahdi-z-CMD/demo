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
    const [amelcheck, setAmelcheck] = useState(null)
    const [selected, setSelected] = useState(2);
    const [adad, setAdad] = useState(0)
    let ihastam = 0
    let modiamel = "no data"
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
            setAdad(adad - 2)
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
                <img width="47" height="47" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" className="search-icon"/>
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
                <div className="cat-1">
                    <a href="#" className="Filters-open-btn">جست و جوی پیشرفته</a>
                </div>
            </div>
        <div className="result-section">
            <ul className='search-result'>
                <HeaderCategory h1={selected === 2 ? "عنوان شرکت" : "عنوان شخص"} h2={selected === 2 ? "نوع شرکت" : "شناسه "} h3={selected === 2 ? "وضعیت شرکت" : "کد ملی"} h4={selected === 2 ? "مدیر عامل" : null}></HeaderCategory>
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
                            try {
                                modiamel = key.summary.companySummary.peopleSummary.ceo.title
                             } catch (error) {
                                modiamel = "نامشخص"
                             }
                            ihastam = ihastam + 1
                            return(
                                <Link to={`/demo/company/${key.summary.companySummary.id}`} className='Links'>
                                    <Cardcompany name={key.summary.companySummary.title} id={key.summary.companySummary.summary.registrationTypeTitle} status={key.summary.companySummary.summary.status} ceo={modiamel}></Cardcompany>
                                </Link>
                            )
                        }
                    }else if(adad === 1){
                        if (ihastam === 6) {
                        }else{
                            try {
                                modiamel = key.summary.companySummary.peopleSummary.ceo.title
                             } catch (error) {
                                 modiamel = "نامشخص"
                             }
                            ihastam = ihastam + 1
                            return(
                                <Link to={`/demo/company/${key.summary.companySummary.id}`} className='Links'>
                                    <Cardcompany name={key.summary.companySummary.title} id={key.summary.companySummary.summary.registrationTypeTitle} status={key.summary.companySummary.summary.status} ceo={modiamel}></Cardcompany>
                                </Link>
                            )
                        }
                    }else if(adad === 2){
                        if (ihastam === 9) {
                        }else{
                            ihastam = ihastam + 1
                            try {
                               modiamel = key.summary.companySummary.peopleSummary.ceo.title
                            } catch (error) {
                                modiamel = "نامشخص"
                            }
                            return(
                                <Link to={`/demo/company/${key.summary.companySummary.id}`} className='Links'>
                                    <Cardcompany name={key.summary.companySummary.title} id={key.summary.companySummary.summary.registrationTypeTitle} status={key.summary.companySummary.summary.status} ceo={modiamel}></Cardcompany>
                                </Link>
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
        <img src={adad < 2 ? arrowdown : arrowup} alt="down" className="more-btn" onClick={changelist}/>
        </ul>
        </div>
        </>
    )
}
function Cardcompany(props){
    return(
        <div className='Cards'>
            <img width="28" height="28" src="https://img.icons8.com/plumpy/24/company.png" alt="company" className="icon-company-row"/>
            <span className="spans avali-span">{props.name}</span>
            <span className="spans">{props.id}</span>
            <span className="spans">{props.status}</span>
            <span className="spans">{props.ceo}</span>
        </div>
    )
}
function Cardperson(props){
    return(
        <div className='Cards'>
            <span className="spans avali-span">نام  : {props.name}</span>
            <span className="spans">شناسه  : {props.id}</span>
            <span className="spans">کد ملی  : {props.status}</span>
        </div>
    )
}
function HeaderCategory(props){
    return(
        <div className="result-header">
            <div className="result-header-row">
            <span className="header-onvan">{props.h1}</span>
            <span>{props.h2}</span>
            <span>{props.h3}</span>
            {
                props.h4 === null 
                ? null
                : <span>{props.h4}</span>
            }
            
            </div>
        </div>
    )
}
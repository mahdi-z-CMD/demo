import { useState } from "react"
import { Link } from 'react-router-dom'
import data from './companytest.json'
import dataperson from './persontest.json'
import arrowdown from './chevron-down-outline.svg'
import arrowup from './chevron-up.svg'
// import data from '../companyjs.json'
const Home = (()=>{
    const [filterh1, setFilterh1] = useState(false);
    const [filterh2, setFilterh2] = useState(false);
    const [filterh3, setFilterh3] = useState(false);
    const [filterh4, setFilterh4] = useState(false);
    const [filterh5, setFilterh5] = useState(false);
    const [query, setQuery] = useState("")
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [filterbox, setFilterbox] = useState(false);
    const [amelcheck, setAmelcheck] = useState(null)
    const [selected, setSelected] = useState(2);
    const [adad, setAdad] = useState(0)
    let ihastam = 0
    let modiamel = "no data"
    // cards -------------------
    const Cardcompany = ((props)=>{
        return(
            <div className='Cards'>
                <img width="28" height="28" src="https://img.icons8.com/plumpy/24/company.png" alt="company" className="icon-company-row"/>
                <span className="spans avali-span">{props.name}</span>
                <span className="spans">{props.id}</span>
                <span className="spans">{props.status}</span>
                <span className="spans">{props.ceo}</span>
            </div>
        )
    })
    const Cardperson = ((props)=>{
        return(
            <div className='Cards'>
                <span className="spans avali-span">نام  : {props.name}</span>
                <span className="spans">شناسه  : {props.id}</span>
                <span className="spans">کد ملی  : {props.status}</span>
            </div>
        )
    })
    const HeaderCategory = ((props)=>{
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
    })
    const Filterarea = (()=>{
        return(
            <div className={filterbox === true ? "filterbox" : "filterbox-hidden"}>
                <div className="select-filter">
                    <h1 onClick={boropaein1}>اطلاعات ثبت شده و تماس<img width="25" height="25" src={filterh1 === false ? arrowdown : arrowup} alt="drop-icon" /></h1>
                    <div className={filterh1 === false ? "filter1detail-hidden" : "filter1detail"}>
                        <div className="filter1row">
                        <span>نوع شرکت</span>
                        <select id="filter-type" name="typecompany">
                            <option value="none">انتخاب کنید</option>
                            <option value="iran">سهامی خاص</option>
                            <option value="uae">شرکت بامسیولیت محدود</option>
                            <option value="uae">تعاونی</option>
                            <option value="uae">بامسئولیت محدود</option>
                            <option value="uae">موسسه</option>
                            <option value="uae">نامشخص</option>
                            <option value="uae">تضامنی</option>
                            <option value="uae">شعبه شرکت خارجی</option>
                            <option value="uae">نسبی</option>
                            <option value="uae">سهامی عام</option>
                            <option value="uae">مختلط سهامی</option>
                        </select>
                        </div>
                        <div className="filter1row">
                        <span>تاریخ تاسیس</span>
                        <select id="filter-type" name="typecompany">
                            <option value="none">انتخاب تاریخ</option>
                            <option value="iran">یک ماه اخیر</option>
                            <option value="uae">سه ماه اخیر</option>
                            <option value="uae"> شش ماه اخیر</option>
                            <option value="uae">یک سال اخیر</option>
                            <option value="uae">انتخاب تاریخ مورد نظر</option>
                        </select>
                        </div>
                        <div className="filter1row">
                        <span>تاریخ آخرین آگهی</span>
                        <select id="filter-type" name="typecompany">
                            <option value="none">انتخاب کنید</option>
                            <option value="iran">یک ماه اخیر</option>
                            <option value="uae">سه ماه اخیر</option>
                            <option value="uae"> شش ماه اخیر</option>
                            <option value="uae">یک سال اخیر</option>
                            <option value="uae">انتخاب تاریخ مورد نظر</option>
                        </select>
                        </div>
                        <div className="filter1row">
                        <span>وضعیت</span>
                        <select id="filter-type" name="typecompany">
                            <option value="none">انتخاب کنید</option>
                            <option value="iran">فعال</option>
                            <option value="uae">غیر فعال مالیاتی</option>
                            <option value="uae"> در حال تصفیه</option>
                            <option value="uae">منحل شده</option>
                            <option value="uae">غیر فعال</option>
                            <option value="uae">شناسه ملی نامعتبر</option>
                            <option value="uae">تعلیق شده</option>
                            <option value="uae">ختم تصفیه شده</option>
                            <option value="uae">ورشکسته شده</option>
                            <option value="uae">ادغام شده</option>
                            <option value="uae">غیرفعال مالیاتی</option>
                            <option value="uae">شناسه ملی لغو اعتبار شده</option>
                            <option value="uae">بررسی سیستمی</option>
                            <option value="uae">تعليق شده</option>
                            <option value="uae">ابطال شده</option>
                            <option value="uae">درحال تصفیه </option>
                        </select>
                        </div>
                    </div>
                    <h1 onClick={boropaein2}>مجوز و صنعت<img width="25" height="25" src={filterh2 === false ? arrowdown : arrowup} alt="drop-icon" /></h1>
                    <div className={filterh2 === false ? "filter2detail-hidden" : "filter2detail"}>
                        <h1>salam</h1>
                    </div>
                    <h1 onClick={boropaein3}>هعیت مدیره و کارکنان<img width="25" height="25" src={filterh3 === false ? arrowdown : arrowup} alt="drop-icon" /></h1>
                    <div className={filterh3 === false ? "filter3detail-hidden" : "filter3detail"}>
                        <h1>salam</h1>
                    </div>
                    <h1 onClick={boropaein4}>اطلاعات مالی<img width="25" height="25" src={filterh4 === false ? arrowdown : arrowup} alt="drop-icon" /></h1>
                    <div className={filterh4 === false ? "filter4detail-hidden" : "filter4detail"}>
                        <h1>salam</h1>
                    </div>
                    <h1 onClick={boropaein5}>اطلاعات جغرافیایی<img width="25" height="25" src={filterh5 === false ? arrowdown : arrowup} alt="drop-icon" /></h1>
                    <div className={filterh5 === false ? "filter5detail-hidden" : "filter5detail"}>
                        <h1>salam</h1>
                    </div>
                </div>
            </div>
        )
    })
    // cards end --------------------------------------
    const boropaein1 = (()=>{
        if (filterh1 === false) {
            setFilterh1(true)
        }else{
            setFilterh1(false)
        }
    })
    const boropaein2 = (()=>{
        if (filterh2 === false) {
            setFilterh2(true)
        }else{
            setFilterh2(false)
        }
    })
    const boropaein3 = (()=>{
        if (filterh3 === false) {
            setFilterh3(true)
        }else{
            setFilterh3(false)
        }
    })
    const boropaein4 = (()=>{
        if (filterh4 === false) {
            setFilterh4(true)
        }else{
            setFilterh4(false)
        }
    })
    const boropaein5 = (()=>{
        if (filterh5 === false) {
            setFilterh5(true)
        }else{
            setFilterh5(false)
        }
    })
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
        }else{
            setAdad(adad - 2)
        }
    }
    const filterboxShow = () =>{
        if (filterbox === false) {
            setFilterbox(true)
        }else{
            setFilterbox(false)
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
                    <a className="Filters-open-btn" onClick={filterboxShow}>جست و جوی پیشرفته</a>
                </div>
            </div>
        <Filterarea></Filterarea>
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
})

export default Home
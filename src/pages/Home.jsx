import { useState, useEffect } from "react"
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
    const [faal, setfaal] = useState('انتخاب کنید')
    const [companytype, setCompanytype] = useState('انتخاب کنید')
    const [companymadar, setCompanymadar] = useState('انتخاب کنید')
    const [companychild, setCompanychild] = useState('انتخاب کنید')
    const [companyeghtesadcode, setCompanyeghtesadcode] = useState('انتخاب کنید')
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [filterbox, setFilterbox] = useState('default');
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
                        <select id="filter-type" name="typecompany" value={companytype} onChange={(e)=> setCompanytype(e.target.value)}>
                            <option value="انتخاب کنید">انتخاب کنید</option>
                            <option value="سهامی خاص">سهامی خاص</option>
                            <option value="شرکت بامسیولیت محدود">شرکت بامسیولیت محدود</option>
                            <option value="تعاونی">تعاونی</option>
                            <option value="بامسئولیت محدود">بامسئولیت محدود</option>
                            <option value="موسسه">موسسه</option>
                            <option value="نامشخص">نامشخص</option>
                            <option value="تضامنی">تضامنی</option>
                            <option value="شعبه شرکت خارجی">شعبه شرکت خارجی</option>
                            <option value="نسبی">نسبی</option>
                            <option value="سهامی عام">سهامی عام</option>
                            <option value="مختلط سهامی">مختلط سهامی</option>
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
                        <select id="filter-type" name="typecompany" value={faal} onChange={(e)=> setfaal(e.target.value)}>
                            <option value="انتخاب کنید">انتخاب کنید</option>
                            <option value="فعال">فعال</option>
                            <option value="غیر فعال مالیاتی">غیر فعال مالیاتی</option>
                            <option value="در حال تصفیه"> در حال تصفیه</option>
                            <option value="منحل شده">منحل شده</option>
                            <option value="غیر فعال">غیر فعال</option>
                            <option value="شناسه ملی نامعتبر">شناسه ملی نامعتبر</option>
                            <option value="تعلیق شده">تعلیق شده</option>
                            <option value="ختم تصفیه شده">ختم تصفیه شده</option>
                            <option value="ورشکسته شده">ورشکسته شده</option>
                            <option value="ادغام شده">ادغام شده</option>
                            <option value="غیرفعال مالیاتی">غیرفعال مالیاتی</option>
                            <option value="شناسه ملی لغو اعتبار شده">شناسه ملی لغو اعتبار شده</option>
                            <option value="بررسی سیستمی">بررسی سیستمی</option>
                            <option value="تعليق شده">تعليق شده</option>
                            <option value="ابطال شده">ابطال شده</option>
                            <option value="درحال تصفیه">درحال تصفیه </option>
                        </select>
                        </div>
                        <div className="filter1row">
                            <span>شرکت مادر</span>
                            <select id="filter-type" name="typecompany" value={companymadar} onChange={(e)=> setCompanymadar(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value="دارد">دارد</option>
                                <option value="ندارد">ندارد</option>
                            </select>
                        </div>
                        <div className="filter1row">
                            <span>زیر مجموعه</span>
                            <select id="filter-type" name="typecompany" value={companychild} onChange={(e)=> setCompanychild(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value="دارد">دارد</option>
                                <option value="ندارد">ندارد</option>
                            </select>
                        </div>
                        <div className="filter1row">
                            <span>کد اقتصادی</span>
                            <select id="filter-type" name="typecompany" value={companyeghtesadcode} onChange={(e)=> setCompanyeghtesadcode(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value="دارد">دارد</option>
                                <option value="ندارد">ندارد</option>
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
    useEffect(() => {
        filterboxShow();
      }, []);
    // filter functions --------------------------
    // filter functions end -------------------
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
                    // filter by search ------------------
                    return query.toLowerCase() === ''
                    ? null
                    : item.summary.companySummary.title.toLowerCase().includes(query)
                }).filter((item)=>{
                    // filter by type company -------------------
                    if (companytype === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else{      
                        return(item.summary.companySummary.summary.registrationTypeTitle === companytype
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by vaziat -------------------
                    if (faal === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else{      
                        return(item.summary.companySummary.summary.status === faal
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by madar -------------------
                    if (companymadar === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else if(companymadar === 'دارد'){
                        return(item.companyPeople.parentCompanies.length !== 0
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }else{
                        return(item.companyPeople.parentCompanies.length === 0
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by child -------------------
                    if (companychild === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else if(companychild === 'دارد'){
                        return(item.companyPeople.childCompanies.length !== 0
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }else{
                        return(item.companyPeople.childCompanies.length === 0
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by eghtesad code -------------------
                    if (companyeghtesadcode === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else if(companyeghtesadcode === 'دارد'){
                        return(item.summary.companySummary.summary.taxNumber !== null
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }else{
                        return(item.summary.companySummary.summary.taxNumber === null
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
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
                            <Link to={`/demo/person/${key.person.id}`} className='Links'>
                                <Cardperson name={key.person.title} id={key.person.id} status={key.person.biography.nationalId}></Cardperson>
                            </Link>
                        )
                    }
                }else if(adad === 1){
                    if (ihastam === 6) {
                    }else{
                        ihastam = ihastam + 1
                        return(
                            <Link to={`/demo/person/${key.person.id}`} className='Links'>
                                <Cardperson name={key.person.title} id={key.person.id} status={key.person.biography.nationalId}></Cardperson>
                            </Link>
                        )
                    }
                }else if(adad === 2){
                    if (ihastam === 9) {
                    }else{
                        ihastam = ihastam + 1
                        return(
                            <Link to={`/demo/person/${key.person.id}`} className='Links'>
                                <Cardperson name={key.person.title} id={key.person.id} status={key.person.biography.nationalId}></Cardperson>
                            </Link>
                        )
                    }
                }
                
            })
        }
        <img src={adad < 2 ? arrowdown : arrowup} alt="down" className={ihastam === 0 ? "more-btn-hide" : "more-btn"} onClick={changelist}/>
        </ul>
        </div>
        </>
    )
})

export default Home
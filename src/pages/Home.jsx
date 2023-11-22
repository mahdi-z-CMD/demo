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
    const [catactive1, setCatactive1] = useState(true);
    const [catactive2, setCatactive2] = useState(false);
    const [catactive3, setCatactive3] = useState(false);
    const [catactive4, setCatactive4] = useState(false);
    const [catactive5, setCatactive5] = useState(false);
    const [catactive6, setCatactive6] = useState(false);
    const [query, setQuery] = useState("")
    const [faal, setfaal] = useState('انتخاب کنید')
    const [companytype, setCompanytype] = useState('انتخاب کنید')
    const [companymadar, setCompanymadar] = useState('انتخاب کنید')
    const [companychild, setCompanychild] = useState('انتخاب کنید')
    const [companyeghtesadcode, setCompanyeghtesadcode] = useState('انتخاب کنید')
    const [companyphone, setCompanyphone] = useState('انتخاب کنید')
    const [companyemail, setCompanyemail] = useState('انتخاب کنید')
    const [companytasis, setCompanytasis] = useState('انتخاب تاریخ')
    const [companyagahi, setCompanyagahi] = useState('انتخاب تاریخ')
    const [companymarkcount, setCompanymarkcount] = useState('انتخاب کنید')
    const [companytolidmojavez, setCompanytolidmojavez] = useState('انتخاب کنید')
    const [companytedad, setCompanytedad] = useState('انتخاب کنید')
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
                        <select id="filter-type" name="typecompany" value={companytasis} onChange={(e)=> setCompanytasis(e.target.value)}>
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
                        <select id="filter-type" name="typecompany" value={companyagahi} onChange={(e)=> setCompanyagahi(e.target.value)}>
                            <option value="none">انتخاب تاریخ</option>
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
                        <div className="filter1row">
                            <span>تلفن</span>
                            <select id="filter-type" name="typecompany" value={companyphone} onChange={(e)=> setCompanyphone(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value="دارد">دارد</option>
                                <option value="ندارد">ندارد</option>
                            </select>
                        </div>
                        <div className="filter1row">
                            <span>ایمیل</span>
                            <select id="filter-type" name="typecompany" value={companyemail} onChange={(e)=> setCompanyemail(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value="دارد">دارد</option>
                                <option value="ندارد">ندارد</option>
                            </select>
                        </div>
                    </div>
                    <h1 onClick={boropaein2}>مجوز و صنعت<img width="25" height="25" src={filterh2 === false ? arrowdown : arrowup} alt="drop-icon" /></h1>
                    <div className={filterh2 === false ? "filter2detail-hidden" : "filter2detail"}>
                        <div className="filter1row">
                            <span>تعداد علامت ثبتی</span>
                            <select id="filter-type" name="typecompany" value={companymarkcount} onChange={(e)=> setCompanymarkcount(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                                <option value={40}>40</option>
                                <option value={50}>50</option>
                                <option value={60}>60</option>
                                <option value={70}>70</option>
                                <option value={80}>80</option>
                                <option value={90}>90</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
                        <div className="filter1row">
                            <span>مجوز تولید</span>
                            <select id="filter-type" name="typecompany" value={companytolidmojavez} onChange={(e)=> setCompanytolidmojavez(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value="دارد">دارد</option>
                                <option value="ندارد">ندارد</option>
                            </select>
                        </div>
                    </div>
                    <h1 onClick={boropaein3}>هعیت مدیره و کارکنان<img width="25" height="25" src={filterh3 === false ? arrowdown : arrowup} alt="drop-icon" /></h1>
                    <div className={filterh3 === false ? "filter3detail-hidden" : "filter3detail"}>
                    <div className="filter1row">
                            <span>جمع تعداد کارمندان</span>
                            <select id="filter-type" name="typecompany" value={companytedad} onChange={(e)=> setCompanytedad(e.target.value)}>
                                <option value="انتخاب کنید">انتخاب کنید</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={80}>80</option>
                                <option value={100}>100</option>
                                <option value={150}>150</option>
                                <option value={200}>200</option>
                                <option value={300}>300</option>
                                <option value={400}>400</option>
                                <option value={500}>500</option>
                                <option value={1000}>1000</option>
                            </select>
                        </div>
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
    const makeactive1 = (()=>{
       setCatactive1(true)
       setCatactive2(false)
       setCatactive3(false)
       setCatactive4(false)
       setCatactive5(false)
       setCatactive6(false)
    })
    const makeactive2 = (()=>{
        setCatactive1(false)
        setCatactive2(true)
        setCatactive3(false)
        setCatactive4(false)
        setCatactive5(false)
        setCatactive6(false)
     })
    const makeactive3 = (()=>{
       setCatactive1(false)
       setCatactive2(false)
       setCatactive3(true)
       setCatactive4(false)
       setCatactive5(false)
       setCatactive6(false)
    })
    const makeactive4 = (()=>{
        setCatactive1(false)
        setCatactive2(false)
        setCatactive3(false)
        setCatactive4(true)
        setCatactive5(false)
        setCatactive6(false)
     })
    const makeactive5 = (()=>{
        setCatactive1(false)
        setCatactive2(false)
        setCatactive3(false)
        setCatactive4(false)
        setCatactive5(true)
        setCatactive6(false)
     })
    const makeactive6 = (()=>{
       setCatactive1(false)
       setCatactive2(false)
       setCatactive3(false)
       setCatactive4(false)
       setCatactive5(false)
       setCatactive6(true)
    })
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
                    {/* <input type="radio" value="ashkhas" name="cat" className="rb1" checked={selected === 1} onChange={onChange1}/> اشخاص */}
                    {/* <input type="radio" value="sherkatha" name="cat" className="rb2" checked={selected === 2} onChange={onChange2}/> شرکت ها */}
                <div className="cat-1">
                    <a className="Filters-open-btn" onClick={filterboxShow}>جست و جوی پیشرفته</a>
                </div>
            </div>
        <div className={filterbox === false ? "header-category-hide" : "header-category"}>
            <div className="header-category-h1">
                <h1>دسته بندی را انتخاب کنید :</h1>
            </div>
            <div className="select-category-icons">
                <h3 className={catactive1 === true ? "select-category-icons-active":""} onClick={makeactive1}>شرکت ها <img width="45" height="45" src="https://img.icons8.com/plumpy/48/company.png" alt="company-icon" /></h3>
                <h3 className={catactive2 === true ? "select-category-icons-active":""} onClick={makeactive2}>اشخاص <img width="45" height="45" src="https://img.icons8.com/material/48/user-male-circle--v1.png" alt="company-icon" /></h3>
                <h3 className={catactive3 === true ? "select-category-icons-active":""} onClick={makeactive3}>آمار تجارت <img width="45" height="45" src="https://img.icons8.com/material-outlined/48/graph.png" alt="company-icon" /></h3>
                <h3 className={catactive4 === true ? "select-category-icons-active":""} onClick={makeactive4}>محصولات <img width="45" height="45" src="https://img.icons8.com/windows/32/package--v1.png" alt="company-icon" /></h3>
                <h3 className={catactive5 === true ? "select-category-icons-active":""} onClick={makeactive5}>آگهی رسمی <img width="45" height="45" src="https://img.icons8.com/pixels/32/news--v1.png" alt="company-icon" /></h3>
                <h3 className={catactive6 === true ? "select-category-icons-active":""} onClick={makeactive6}>مالکیت های فکری <img width="45" height="45" src="https://img.icons8.com/material-two-tone/48/idea--v1.png" alt="company-icon" /></h3>
            </div>
        </div>
        <Filterarea></Filterarea>
        <div className={filterbox === false ? "delete-cat-hide" : "delete-cat"}>
            <h2>فیلتر های اعمال شده :</h2>
            <div className="delete-items">
            <h3 className={companytype === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanytype('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>نوع شرکت</h3>
            <h3 className={companytasis === 'انتخاب تاریخ' ? "delete-hide" : ""} onClick={()=>setCompanytasis('انتخاب تاریخ')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>تاریخ تاسیس</h3>
            <h3 className={companyagahi === 'انتخاب تاریخ' ? "delete-hide" : ""} onClick={()=>setCompanyagahi('انتخاب تاریخ')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>تاریخ تاسیس</h3>
            <h3 className={faal === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setfaal('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>وضعیت</h3>
            <h3 className={companymadar === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanymadar('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>شرکت مادر</h3>
            <h3 className={companychild === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanychild('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>زیر مجموعه</h3>
            <h3 className={companyeghtesadcode === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanyeghtesadcode('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>کد اقتصادی</h3>
            <h3 className={companyphone === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanyphone('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>تلفن</h3>
            <h3 className={companyemail === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanyemail('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>ایمیل</h3>
            <h3 className={companymarkcount === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanymarkcount('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>تعداد علامت ثبتی</h3>
            <h3 className={companytolidmojavez === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanytolidmojavez('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>مجوز تولید</h3>
            <h3 className={companytedad === 'انتخاب کنید' ? "delete-hide" : ""} onClick={()=>setCompanytedad('انتخاب کنید')}><img width="20" height="20" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign" className="delete-icon"/>جمع تعداد کارمندان</h3>
            </div>
        </div>
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
                }).filter((item)=>{
                    // filter by company phone -------------------
                    if (companyphone === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else if(companyphone === 'دارد'){
                        return(item.summary.companySummary.communications.tel !== null
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }else{
                        return(item.summary.companySummary.communications.tel === null
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by company email -------------------
                    if (companyemail === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else if(companyemail === 'دارد'){
                        return(item.summary.companySummary.communications.email !== null
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }else{
                        return(item.summary.companySummary.communications.email === null
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by company mark count -------------------
                    if (companymarkcount === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else{
                        return(companymarkcount <= item.certificatesAndTrademarks.certificates.length
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by company tolid mojavez -------------------
                    if (companytolidmojavez === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else if(companytolidmojavez === 'دارد'){
                        return(item.products.companyProductAndService.samtInfoList.length !== 0
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }else{
                        return(item.summary.companySummary.communications.email === 0
                            ? item.summary.companySummary.title.toLowerCase().includes(query)
                            : null) 
                    }
                }).filter((item)=>{
                    // filter by company heyat modire tedad -------------------
                    if (companytedad === 'انتخاب کنید') {
                        return item.summary.companySummary.title.toLowerCase().includes(query)
                    }else{
                        return(companytedad <= item.companyPeople.companyDirectors.length
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
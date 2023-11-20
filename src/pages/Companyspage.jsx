// import datas from '../pages/specifidata.json'
import { useState } from 'react'
import datas from '../spefik.json'
import { useParams } from 'react-router-dom'
import moment from 'moment-jalaali';
const Companyspage = (()=>{
    const {companyid} = useParams()
    const [isbook , setIsbook] = useState(false)
    const [miladicheck, setmiladicheck] = useState(true)
    const shamsidateTasis = moment(datas.companys[companyid].summary.companySummary.summary.registrationDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
    const shamsidateLastnews = moment(datas.companys[companyid].summary.companySummary.summary.lastCompanyNewsDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
    const changebook = (()=>{
        if (isbook === false) {
            setIsbook(true)
        }else{
            setIsbook(false)
        }
    })
    const Header = ((props)=>{
        return(
            <div className="company-header">
                <img width="50" height="50" src={isbook === false? "https://img.icons8.com/ios/50/bookmark-ribbon--v1.png":"https://img.icons8.com/ios-filled/50/bookmark-ribbon.png"} alt="bookmark-ribbon--v1" className='save-icon' onClick={changebook}/>
                <div className="company-header-title">
                <img width="24" height="24" src="https://img.icons8.com/plumpy/64/company.png" alt="company" className='icon8'/>
                <div className="title-names">
                    <h1>{props.name}</h1>
                    <span>{props.type}</span>
                </div>
                </div>
                <div className="select-info">
                <a href="/" className='select-info-btn'>اطلاعات اصلی</a>
                <a href="/" className='select-info-btn'>اشخاص</a>
            </div>
            </div>
        )
    })
    const Sabtiinfocard = ((props)=>{
        return(
        <div className="sabti-info">
            <div className="sabti-row">
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1" className='sabti-icon'/>تاریخ تاسیس: {shamsidateTasis}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/plumpy/64/company.png" alt="calendar--v1" className='sabti-icon'/>نوع شرکت: {datas.companys[companyid].summary.companySummary.summary.registrationTypeTitle}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/ok--v1.png" alt="calendar--v1" className='sabti-icon'/>وضعیت شرکت: {datas.companys[companyid].summary.companySummary.summary.status}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/edit-user-male.png" alt="calendar--v1" className='sabti-icon'/>شماره ثبت: {datas.companys[companyid].summary.companySummary.summary.registrationNo}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/plumpy/24/news.png" alt="calendar--v1" className='sabti-icon'/>آخرین آگهی روزنامه رسمی: {shamsidateLastnews}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/mailbox-with-letter.png" alt="calendar--v1" className='sabti-icon'/>کد پستی: {datas.companys[companyid].summary.companySummary.communications.postalCode}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/id-verified.png" alt="calendar--v1" className='sabti-icon'/>شناسه ملی: {datas.companys[companyid].summary.companySummary.id}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/money-bag-euro.png" alt="money-bag-euro" className='sabti-icon'/>کد اقتصادی: {datas.companys[companyid].summary.companySummary.summary.taxNumber}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/address--v1.png" alt="money-bag-euro" className='sabti-icon'/>شناسه ملی: {datas.companys[companyid].summary.companySummary.communications.address}</span>
            </div>
        </div>
        )
    })
    const Sabtiashkhas = ((props)=>{
        return(
            <div className="sabti-askhkhas-info">
                <div className="title-cat">
                    <h1>مدیران</h1>
                </div>
                <div className="title-ceo">
                        <img width="74" height="74" src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png" alt="user-male-circle--v1" className='ceo-pic'/>
                        <div className="title-ceo-pic">
                            <h1>{datas.companys[companyid].summary.companySummary.peopleSummary.ceo.title}</h1>
                            <h3 className='modramel'>مدیر عامل</h3>
                        </div>
                </div>
            </div>
        )
    })
    return(
        <div className='company-container'>
            <Header name={datas.companys[companyid].summary.companySummary.title} type={datas.companys[companyid].summary.companySummary.summary.registrationTypeTitle}></Header>
            
        <h1 className='sabti-h1'>اطلاعات ثبتی</h1>
           <Sabtiinfocard></Sabtiinfocard>

        <h1 className='sabti-h1'>اشخاص</h1>
        <Sabtiashkhas></Sabtiashkhas>
        <h1>
            {
                datas.companys[companyid].summary.companySummary.communications.tel
            }
        </h1>
        <h1>balast</h1>
        </div>
    )
})
export default Companyspage
    




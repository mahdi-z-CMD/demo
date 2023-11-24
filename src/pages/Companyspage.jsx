// import datas from '../pages/specifidata.json'
import { useState } from 'react'
import datas from '../spefik.json'
import { Await, useParams } from 'react-router-dom'
import moment from 'moment-jalaali';
import arrowdown from './chevron-down-outline.svg'
import arrowup from './chevron-up.svg'
const Companyspage = (()=>{
    const {companyid} = useParams()
    let sematyaro = ''
    let ceoname = ''
    const tedadmodiran = datas.companys[companyid].companyPeople.companyDirectors.length
    let modirancounter = 0
    const [bishtarmodir , setbishtarmodir] = useState(3)
    console.log(tedadmodiran);
    console.log(bishtarmodir);
    const [isbook , setIsbook] = useState(false)
    const capitalTOrial = datas.companys[companyid].summary.companySummary.financialSummary.capital
    const rialshod = capitalTOrial.toLocaleString('en-US');
    const truncatedValue = rialshod.slice(0, -8);
    const labelrial = 'میلیون ریال';
    const formattedValueWithLabel = truncatedValue + ' ' + labelrial;
    const shamsidateTasis = moment(datas.companys[companyid].summary.companySummary.summary.registrationDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
    const shamsidateLastnews = moment(datas.companys[companyid].summary.companySummary.summary.lastCompanyNewsDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
    const changelist = () =>{
        if (bishtarmodir < tedadmodiran) {
            setbishtarmodir(bishtarmodir + 3)
        }else{
            setbishtarmodir(3)
        }
    }
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
                    <a href="#sabti-info-link" className='select-info-btn'>اطلاعات اصلی</a>
                    <a href="#sabti-askhkhas-info-link" className='select-info-btn'>اشخاص</a>
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
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/external-glyph-geotatah/64/external-economic-world-economic-recovery-glyph-glyph-geotatah-3.png" alt="money-bag-euro" className='sabti-icon'/>کد اقتصادی: {datas.companys[companyid].summary.companySummary.summary.taxNumber}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/money-bag-euro.png" alt="money-bag-euro" className='sabti-icon'/>آخرین سرمایه ثبتی: {formattedValueWithLabel}</span>
            <span className='sabti-text'><img width="20" height="20" src="https://img.icons8.com/material-two-tone/24/address--v1.png" alt="money-bag-euro" className='sabti-icon'/>آدرس : {datas.companys[companyid].summary.companySummary.communications.address}</span>
            </div>
        </div>
        )
    })
    const Sabtiheader = (()=>{
        return(
            <div className="sabti-ashkhas-header">
                <div className="header-row-ashkhas">
                    <h1>نام</h1>
                    <h1>سمت</h1>
                    <h1>تاریخ</h1>
                    <h1>سمت قبلی</h1>
                </div>
            </div>
        )
    })
    const handleiconopen = (event) => {
        const h1Element = event.target;
        if (h1Element.classList.contains('new-class')) {
        h1Element.classList.remove('new-class');
        } else {
        h1Element.classList.add('new-class');
        return h1Element.classList.add('new-class');
        }
      };
    const SabtiashkhasMembers = ((props)=>{
        const shamsidatestartsemat = moment(props.sematdate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
        return(
            <div className="sabti-ashkhas-members">
                <div className="members-row-ashkhas">
                    <h1><img className='memeber-icon' width="45" height="45" src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png" alt="icon-person" />{props.name}</h1>
                    <h1>{props.semat}</h1>
                    <h1>از {shamsidatestartsemat}</h1>
                    <h1 className='icon-sematghabli' onClick={handleiconopen}></h1>
                </div>
            </div>
        )
    })
    const Sabtiashkhas = ((props)=>{
        try {
            ceoname = datas.companys[companyid].summary.companySummary.peopleSummary.ceo.title
        } catch{
            ceoname = "نامشخص"
        }
        return(
            <div className="sabti-askhkhas-info">
                <div className="title-cat">
                    <h1>مدیران</h1>
                </div>
                <div className="title-ceo">
                        <img width="74" height="74" src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png" alt="user-male-circle--v1" className='ceo-pic'/>
                        <div className="title-ceo-pic">
                            <h1>{ceoname}</h1>
                            <h3 className='modramel'>مدیر عامل</h3>
                        </div>
                </div>
                <Sabtiheader></Sabtiheader>
                {
                    datas.companys[companyid].companyPeople.companyDirectors.map((key)=>{
                        try {
                            sematyaro = key.title
                        } catch{
                            sematyaro = "نامشخص"
                        }
                        if (modirancounter === bishtarmodir) {

                        }else{
                            modirancounter += 1
                            return(
                                <SabtiashkhasMembers name={key.personTitle} semat={sematyaro} sematdate={key.startDate}></SabtiashkhasMembers>
                            )
                        }
                    })
                }
                <div className="bishtarneshon-ashkhas">
                 <h1 className={bishtarmodir === 0 ? "more-btn-hide" : "more-btn-ashkhas"} onClick={changelist}>{tedadmodiran <= bishtarmodir ? "کمتر.." : "بیشتر.."}</h1>
                </div>

            </div>
        )
    })
    return(
        <div className='company-container'>
            <Header name={datas.companys[companyid].summary.companySummary.title} type={datas.companys[companyid].summary.companySummary.summary.registrationTypeTitle}></Header>
            
        <h1 className='sabti-h1' id='sabti-info-link'>اطلاعات ثبتی</h1>
           <Sabtiinfocard></Sabtiinfocard>

        <h1 className='sabti-h1' id='sabti-askhkhas-info-link'>اشخاص</h1>
        <Sabtiashkhas></Sabtiashkhas>
        </div>
    )
})
export default Companyspage
    




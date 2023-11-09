import { Link } from 'react-router-dom'
import data from './companytest.json'
// import data from '../companyjs.json'
import { useState } from 'react'
import {businessOutline, personCircleOutline} from 'ionicons/icons'


const Search = (()=>{
    // usestate values
    const [query, setQuery] = useState("")
    const [mark, setMark] = useState(false)
    const [mark1, setMark1] = useState(false)
    // usestate values end
    // check the checkbox value
    const taghir = (event) => {
        event.persist();
        setMark(event.target.checked);
      };
    const taghir2 = (event) => {
        event.persist();
        setMark1(event.target.checked);
      };
    // check the checkbox value end
    const Categorycard = ((props)=>{
        return(
                <div className="cattext">
                    <img src={props.logo} alt="" className='ion'/>
                    <h1>{props.Title}</h1>
                </div>
        )
    })
    const Filtersoption = (()=>{
        return(
            <div className="Filterss">
                <input type="checkbox" name="status" id="status" onChange={taghir} checked={mark}/>وضعیت
                <input type="checkbox" name="type" id="type" onChange={taghir2} checked={mark1}/>نوع
            </div>
        )
    })
    return(
        <div className='Main-search'>
        <input type="text" placeholder="جستجو در" className="search-btn-page" onChange={e => setQuery(e.target.value)}/>
        <div className='catcard'>
        <Categorycard Title={"شرکت ها"} logo={personCircleOutline}></Categorycard>
        <Categorycard Title={"شرکت ها"} logo={businessOutline}></Categorycard>
        </div>
        <Filtersoption></Filtersoption>
        <ul className='search-result'>
        {
            data.filter((item)=>{
                return query.toLowerCase() === ''
                ? null
                : item.summary.companySummary.title.toLowerCase().includes(query)
            }).filter((items)=>{
                return mark === false
                ? items
                : items.summary.companySummary.summary.status === 'فعال'
            }).filter((items)=>{
                return mark1 === false
                ? items
                : items.summary.companySummary.summary.registrationTypeTitle === 'سهامی عام'
            }).map((key)=>{
                
                return(
                    <li>
                    <Link to={`/company/${key.summary.companySummary.id}`} className='Links'>
                         <Card name={key.summary.companySummary.title} id={key.summary.companySummary.id} status={key.summary.companySummary.summary.status}></Card>
                    </Link>
                    </li>
                )
            })
        }
        </ul>
        
        </div>
    )
})
function Card(props){
    return(
        <div className='Cards'>
        <span>نام کمپانی  : {props.name}</span>
        <span>شناسه  : {props.id}</span>
        <span>وضعیت  : {props.status}</span>
        </div>
    )
}
export default Search
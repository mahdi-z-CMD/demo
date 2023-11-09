// import datas from '../pages/specifidata.json'
import datas from '../spefik.json'
import { useParams } from 'react-router-dom'
export default function Companyspage(){
    const {companyid} = useParams()
    return(
        <>
        <h1>{companyid}</h1>
        <ul>
        {
            datas.companys[10100518071].companyPeople.companyDirectors.map((key)=>{
                return(
                    <>
                    <li>CEOs names : {key.personTitle}</li><br />
                    </>
                )
            })
        }
        {
            datas.companys[10100518071].summary.companySummary.summary.registrationTypeTitle
        }
        </ul>
        </>
    )
}
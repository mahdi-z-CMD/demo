// import datas from '../pages/specifidata.json'
import datas from './person_spefictest.json'
import { useParams } from 'react-router-dom'
export default function Person(){
    const {personid} = useParams()
    return(
        <>
        <h1>کد ملی :{personid}</h1>
        <ul>
        {
            datas.persons[personid].person.relatedCompanies.inspectorsAndOthers.map((key)=>{
                return(
                    <>
                    <li>{datas.persons[personid].person.title} companys : {key.companyTitle}</li><br />
                    </>
                )
            })
        }
        </ul>
        </>
    )
}
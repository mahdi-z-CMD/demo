import data from './companytest.json'
// import maindata from './companyjs.json'
import './index.css'
export const Homepage = () => {

    
    
  return (
    <div className="home">
      <h1>Data : </h1>
      <br />
      <hr />
      <ul>
      {
        data.map((key)=>{
          return(
            <ol className='card'><a href={"/company/"+key.summary.companySummary.id}>name : {key.summary.companySummary.title} | id : {key.summary.companySummary.id}</a></ol>
          )
        })
      }
    </ul>
		</div>
  )
}
export default Homepage;
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default ()=>{
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate()

    const {auth} = useSelector(state=>({auth: state.status.auth}))
    useEffect(()=>{
        if(!auth){
            navigate("/register")
        }
        fetch("http://localhost:2000/jobs").then(res=>res.json()).then(result=>{setJobs(result), console.log(result)}).catch(e=>alert("something went wrong"));
    },[])

    return (
        <>
        <div style={{backgroundColor: "grey", color: "purple"}}>
        {jobs.map(el=><>
        <h3>Company Name {el.companyname}</h3>
        <h3>Title : {el.title}</h3>
        <h3>salary : {el.salary}</h3>
        <h3>location : {el.location}</h3>
        <h3>JobType : {el.type}</h3>
        <hr></hr>
        </>)}
        </div>
        </>
    )
}
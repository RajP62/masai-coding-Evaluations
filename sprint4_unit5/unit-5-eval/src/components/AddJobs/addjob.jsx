import { useState } from "react"
import { useSelector } from "react-redux";

export default ()=>{
    const [form, setForm] = useState({});

    const changeHandler = ({target: {name,value}})=>{
        setForm({
            ...form, [name]:value
        })
    }

    const {client,admin} = useSelector(state=>({client: state.client, admin: state.admin}))

    const addJob = ()=>{
        fetch("http://localhost:2000/jobs",{
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res=>res.json()).then(result=>alert("Data added successfully"));
    }
    return client? <h1>Client cannot access</h1> :  <>
    <h1>Add new job</h1>
    <input onChange={changeHandler}type="text" name="companyname" placeholder="Company Name"></input>
    <input onChange={changeHandler}type="text" name="title" placeholder="Title"></input>
    <input onChange={changeHandler}type="text" name="salary" placeholder="Salary"></input>
    <input onChange={changeHandler}type="text" name="location" placeholder="Location"></input>
    <input onChange={changeHandler}type="text" name="type" placeholder="JobType"></input>
    <button onClick={addJob} type="submit">Submit</button>
    </>
}
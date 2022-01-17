import { Form, Input } from "../formComp/formComp";
import {v4 as uuidv4} from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = ()=>{
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = ({target: {name,value}})=>{
        setForm({
            ...form,[name]:value,token:uuidv4()
        })
    }
    const registerUser = (e)=>{
        e.preventDefault();
        fetch('http://localhost:2000/clients',{
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res=>res.json()).then(res=>navigate("/login"));
    }
    return <>
    <Form onSubmit={registerUser}>
    <h1>Register</h1>
        <Input name="name" onChange={handleChange}  placeholder="Name"></Input>
        <Input name="email" onChange={handleChange} placeholder="Email"></Input>
        <Input name="password" onChange={handleChange} placeholder="Password"></Input>
        <Input  type={`submit`}></Input>
    </Form>
    </>
}




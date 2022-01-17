import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "../formComp/formComp"
import { loginLoading, loginSuccess, loginFailure} from "../../features/Auth/action";
import { useNavigate } from "react-router-dom";

export default ()=>{
    const [login, setLogin] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {loading, error, auth} = useSelector(state=>({loading: state.loading, error: state.error, auth: state.status.auth}));

    const handleChange = ({target:{name, value}})=>{
        setLogin({
            ...login, [name]:value
        })
    }
    useEffect(()=>{
        if(auth){
            navigate("/alljobs")
        }
    })

    const loginUser = (e)=>{
        dispatch(loginLoading());
        fetch("https://reqres.in/api/login",{
            method: "POST",
            body: JSON.stringify(login),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res=>res.json()).then(res=>{dispatch(loginSuccess(res)); console.log(res)}).catch(e=>dispatch(loginFailure()));
    }

    return (
        <>
        <Input name="email" onChange={handleChange} placeholder="Email"></Input>
        <Input name="password" onChange={handleChange} placeholder="Password"></Input>
        <button onClick={loginUser}  type={`submit`}>Submit</button>
        </>
    )
}
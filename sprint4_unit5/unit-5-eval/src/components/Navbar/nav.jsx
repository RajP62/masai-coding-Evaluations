import Style from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Div = Style.div`
height: 50px;
background-color: purple;
display: flex;
justify-content: space-between;
`;

export default ()=>{
    return(
    <Div>
    <Link style={{color: "white"}} to={`/login`}>Login</Link>
    <Link style={{color: "white"}} to={'/register'}>Register</Link>
    <Link style={{color: "white"}} to={`/alljobs`}>All Jobs</Link>
    <Link style={{color: "white"}} to={`/addjob`}>Add Jobs</Link>
    </Div>
    )
}
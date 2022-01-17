import {Route, Routes} from "react-router-dom"
import { Register } from "../components/register/register"
import Login from "../components/login/login"
import AllJobs from "../components/AllJobs/allJobs"
import Addjob from "../components/AddJobs/addjob"

export default ()=>{
    return <Routes>
        <Route path={`/login`} element={<Login/>}></Route>
        <Route path={`/Register`} element={<Register/>}></Route>
        <Route path={`/alljobs`} element={<AllJobs/>}></Route>
        <Route path={`/addjob`} element={<Addjob/>}></Route>
    </Routes>
}
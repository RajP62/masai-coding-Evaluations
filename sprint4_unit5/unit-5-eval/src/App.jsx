import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routes from "./Routes/routers";
import Nav from './components/Navbar/nav';


function App() {
  return (
    <>
    <Nav/>
    <Routes/>
    </>
  )
}

export default App

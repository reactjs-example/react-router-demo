import { Outlet } from "react-router-dom"


const Home=()=>{
    return <>
    <h1>Home</h1>
    </>
}

const About = ()=>{
    return <>
    <h1>About</h1>
    <Outlet/>
    </>
}

const Settings = ()=>{
    return <>
    <h1>Settings</h1>
    </>
}

export {Home, About, Settings}
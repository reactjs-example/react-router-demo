import { Link, Navigate, Route, Routes } from "react-router-dom"


const Home=()=>{
    return <>
      <h1>Home</h1>
    </>
}

const Home2=()=>{
    return <>
    <Navigate replace="home"/>
    </>
}

const Nav = ()=>{
    return <>
    <ul>
        <li><Link to="home">Home</Link></li>
        <li><Link to="home2">Home 2</Link></li>
    </ul>
    </>
}

const PageRoutes=()=>{
    return <>
    <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="home2" element={<Home2/>}/>
    </Routes>
    </>
}

export {PageRoutes, Nav}
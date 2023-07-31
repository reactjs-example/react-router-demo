import { useState } from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom"


const Home=()=>{
    return <>
      <h1>Home</h1>
    </>
}

const Home2=()=>{
   
    let [count,setCount] = useState(1);

    const increaseCount=()=>{
        setCount((prevState)=>{return prevState + 1});
    }

    return <>
    <h2>Home 2</h2>
    {
     count===3 && <p><Navigate to="../home"/></p>
    }

    <button onClick={increaseCount}>Navigate</button>
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
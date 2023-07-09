import { Link, Route, Routes } from "react-router-dom"
import { About, Contact, Home, PageNotFound } from "./BasicNavigation"


export const Example1 = ()=>{

    let content = `BorwserRouter
    Routes 
    Route
    Link and Nav`
    return <>
         
         {content}

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="contact1">Unknown</Link></li>
        </ul>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>

    </>

}
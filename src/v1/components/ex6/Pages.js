import { Link } from "react-router-dom"


const Home=()=>{
    return <>
    <h1>Home</h1>
    </>
}

const About=()=>{
    return <>
    <h1>About</h1>
    </>
}

const Contact=()=>{
    return <>
    <h1>Contact</h1>
    </>
}

const Nav=()=>{

    return <>
    <ul>
        <li><Link to="home">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
    </ul>
    </>
}
export {Home, About, Contact, Nav}
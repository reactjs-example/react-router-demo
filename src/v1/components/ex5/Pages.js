import { Outlet, useOutletContext } from "react-router-dom"


const Home=()=>{
    return <>
    <h1>Home</h1>
    </>
}

const About = ()=>{

    let person={
        name: 'John Doe',
        city: 'Paris',
        age: 30
    }
    return <>
    <h1>About</h1>
  
    <Outlet context={person}/>
    </>
}

const Settings = ()=>{

    let {name, age} = useOutletContext();
    return <>
    <h1>Settings</h1>
    {name} | {age}
    </>
}

export {Home, About, Settings}
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

 const navActiveStyleHandler = ({isActive})=>{
    console.log(isActive)
  return { fontSize: isActive ? "60px" : "50px"  }
 }   
  return (
    <nav>
        {/* <Link to={'/'}>Home</Link> <br/>
        <Link to={'/about'}>About</Link> */}

        <NavLink style={navActiveStyleHandler} to={'/'}>Home</NavLink>
        <NavLink style={navActiveStyleHandler} to={'/about'}>About</NavLink>
        <NavLink style={navActiveStyleHandler} to={'/products'}>Products</NavLink>
    </nav>
  )
}

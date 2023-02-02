import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { Featured } from './Featured'

export const Products = () => {

  return (
    <div><input placeholder='search product'/>
    <nav>
        <Link to={'featured'}>Featured</Link>
        <Link to={'new'}>Arrival</Link>
    </nav>
    <Outlet/> {/** to display the router pages */}
    </div>
  )
}

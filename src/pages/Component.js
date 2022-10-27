import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Component = () => {
  return (
    <>
    <Outlet/>
      <Link to='/'></Link>
      <Link to='/'></Link>
      <Link to='/'></Link>
      <Link to='/'></Link>
      <Link to='/'></Link>
      <Link to='/'></Link>
      <Link to='/'></Link> 
    </>
  )
}

export default Component
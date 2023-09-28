import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='d-flex justify-content-around py-4'>
        <Link to="/" >Home</Link>
        <Link to="/tasks">Task</Link>
        <Link to="/new">New Task</Link>
        {/* <Link to="/edit">Edit Task</Link> */}
    </div>
  )
}

export default Navbar1
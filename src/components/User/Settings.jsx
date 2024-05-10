import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import home from "../assets/home.png"
import changePassword from "../assets/change password.png"
import logout from "../assets/log-out.png"


const Settings = () => {

    const token = localStorage.getItem('token')

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

  return (
    <div>
        <div className='row text-center p-3 bg-danger' style={{color:"white"}} >
            <div className="col">
            <Link to="/dashboard"><img id='homeImg' src={home}/></Link>
            </div>
            <div className="col-11">
            <h2><b>Settings</b></h2>
            </div>
        </div>
        <div className='row form-outline m-5 '>
            <div className="col-1">
                <img style={{width:"40px"}} src={changePassword}/>
            </div>
            <div className="col-11">
                <Link to="new-password" style={{textDecoration:"none", color:"black"}}><h3>Change Password</h3></Link>
            </div>
        </div>
        <Outlet />
        <Link style={{textDecoration:"none", color:"black"}} onClick={handleLogout}>
        <div className='row form-outline m-5 '>
            <div className="col-1">
                <img style={{width:"40px"}} src={logout}/>
            </div>
        
            <div className="col-11">
            
                <h3>Logout</h3>
            
            </div>
        </div>
        </Link> 
    </div>
  )
}

export default Settings
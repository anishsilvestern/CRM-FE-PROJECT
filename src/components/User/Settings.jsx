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
            <div className="col-1">
            <Link to="/dashboard"><img id='homeImg' src={home}/></Link>
            </div>
            <div className="col-11">
            <h2><b>Settings</b></h2>
            </div>
        </div>

        {/* change password button */}
        <div className='row form-outline m-5'>
            <div className="col-3 col-md-3">
                <img style={{width:"40px", marginBottom:"10px"}} src={changePassword}/>
            </div>
            <div className="col-9 col-md-9">
                <Link to="new-password" style={{textDecoration:"none", color:"black"}}><h3>Change Password</h3></Link>
            </div>
        </div>

        {/* new password form */}
        <Outlet />

        {/* Logout button */}
        <Link style={{textDecoration:"none", color:"black"}} onClick={handleLogout}>
            <div className='row form-outline m-5 '>
                <div className="col-3 col-md-3">
                    <img style={{width:"40px", marginBottom:"10px"}} src={logout}/>
                </div>
                <div className="col-9 col-md-9"> 
                    <h3>Logout</h3>
                </div>
            </div>
        </Link> 
    </div>
  )
}

export default Settings
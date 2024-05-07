import React from 'react'
import { Link } from 'react-router-dom'
import './UserModel.css'

const UserModel = ({ isUserOpen, isUserCloseModal }) => {
  return (
    <div>
        <div className={`modal-backdrop fade ` + (isUserOpen ? 'show' : '')} style={{ display: isUserOpen ? 'block' : 'none' }} onClick={isUserCloseModal}></div>

        <div className={`modal fade ` + (isUserOpen ? 'show' : '')} style={{ display: isUserOpen ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header p-0">
                        <div className='modal-title' style={{backgroundColor: "red", color: "white", padding: "20px", width:"100vh"}}>
                            <h2><b>T Anish Silvestern</b></h2>
                            <p>Last Login:</p>
                            <button type="button" className="btn-close" onClick={isUserCloseModal}></button>
                        </div>
                    </div>
                    <div className='modal-body ms-4'>
                        <div >  
                            <Link to="/profile" className='px-2' style={{textDecoration: "none", color:"black", fontSize:"20px"}}><img className='imgLogo' src="/src/assets/manage_accounts_FILL0_wght400_GRAD0_opsz24.svg" /> Profile</Link>
                        </div>
                        <div className='mt-4'>
                        <Link to="/settings" className='px-2' style={{textDecoration: "none", color:"black", fontSize:"20px"}}><img className='imgLogo' src="/src/assets/settings_FILL0_wght400_GRAD0_opsz24.svg" /> Settings</Link>
                        </div>

                        <div className='mt-4'>
                        <Link  className='px-2' style={{textDecoration: "none", color:"black", fontSize:"20px"}}><img className='imgLogo' src="/src/assets/log-out.svg" /> Logout</Link>
                        </div>
                            
                    </div>                       
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserModel
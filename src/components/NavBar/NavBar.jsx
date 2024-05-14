import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import UserModel from '../Model/UserModel'
import user from '../assets/user.svg'


export const NavBar = () => {

  // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [isUserModelOpen, setIsUserModelOpen] = useState(false)

  

  // const handleSearchModalOpen = () => {
  //   setIsSearchModalOpen(true)
  // }

  // const handleSearchModalClose = () => {
  //   setIsSearchModalOpen(false)
  // }

  const handleUserModalOpen = () => {
    setIsUserModelOpen(true)
  }

  const handleUserModelClose = () => {
    setIsUserModelOpen(false)
  }


  return (
    <div>
    {/*  navigation bar in the home page */}
    <nav className="navbar navbar-expand-md py-3">
      <div className="container-fluid" >
        <Link id='title' className="navbar-brand bebas-neue-regular" to="/dashboard"><h3>TextileCRM</h3></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item mx-3  me-md-5">
              <Link className="nav-link active" aria-current="page" to="home"><b>Home</b></Link>
            </li>
            <div className="dropdown">
              <Link className="btn dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>Customers</b>
              </Link>

              <ul className="dropdown-menu bg-info">
                <li><Link className="dropdown-item" to="all-customers">All Customers</Link></li>
                <li><Link className="dropdown-item" to="customers-contact"> Customers Contact</Link></li>
                <li><Link className="dropdown-item" to="add-customer">Add Customer</Link></li>
              </ul>
            </div>
            <div className="dropdown mx-md-5">
              <Link className="btn dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>Products</b>
              </Link>

              <ul className="dropdown-menu bg-info">
                <li><Link className="dropdown-item" to="all-products">All Products</Link></li>
                <li><Link className="dropdown-item" to="add-product">Add Product</Link></li>
              </ul>
            </div>
          </ul>
        </div>

        {/* search  icon */}
        <div id='navIcons' className='nav-link me-4' >
          {/* <Link className='me-3' to="/dashboard" onClick={handleSearchModalOpen}><img src="/src/assets/search.svg" /></Link> */}
          {/* User icon */}
          <Link className='nav-link me-sm-5' to="/dashboard"><img src={user}  onClick={handleUserModalOpen} /></Link>
        </div>
      </div>
    </nav>
     {/* <SearchModal isSearchOpen={isSearchModalOpen} isSearchCloseModal={handleSearchModalClose} /> */}
     <UserModel isUserOpen={isUserModelOpen} isUserCloseModal={handleUserModelClose} />
  </div>  
  )
}

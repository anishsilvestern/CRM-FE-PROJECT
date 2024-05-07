import React from 'react'
import { Link } from 'react-router-dom'

const AllCustomers = () => {
    const filterStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '3rem',
        marginRight: '3rem'
    }
  return (
    <div>
        <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
            <h1>All Customers</h1>
        </div>
        <div>
        <div className="container-fluid" style={filterStyle}>
            <label htmlFor="filterStatus" id="filterStatus"><strong>Filter Status :</strong>&nbsp;&nbsp;</label>
            <select name="filter" id="filter" className="bg-info">
                <option value="All" >All</option>
                <option value="Lead">Lead</option>
                <option value="Prospect">Prospect</option>
                <option value="Repeat Customers">Repeat Customers</option>
            </select>
        </div>
        </div>
        <div className='container'>
            <div className="row mt-3" >
                <div className="col-md-4 mb-3">
                    <div className='card'>
                        <div className="card-body">
                        <p className="card-text"><strong>ID: 100  </strong></p>
                        <p className="card-text"><strong>Name: T Anish Silvestern</strong></p>
                        <p className="card-text"><strong>Sources: Facebook </strong></p>
                        <p className="card-text"><strong>Status: Lead </strong></p>
                        <Link className="btn btn-info me-2" to='/dashboard/full-details-customer' >
                            Full Details
                        </Link>
                        <Link className="btn btn-primary me-2" to="/dashboard/edit-details-customer" >
                            Edit
                        </Link>
                        <button className="deleteButton btn btn-danger" >
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllCustomers
import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const filterStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '3rem',
        marginRight: '3rem'
    }
  return (
    <div>
        <div className='text-center p-3' style={{color:"black", fontFamily:"sans-serif", backgroundColor:"#70FFCD"}}>
            <h1>All Products</h1>
        </div>
        <div>
        <div className="container-fluid" style={filterStyle}>
            <label htmlFor="filterStatus" id="filterStatus"><strong>Filter Status :</strong>&nbsp;&nbsp;</label>
            <select name="filter" id="filter" className="bg-info">
                <option value="All" >All</option>
                <option value="Price below 1000">Price below 1000</option>
                <option value="Price above 1000">Price above 1000</option>
                <option value="Stock below 10">Stock below 10</option>
                <option value="Stock above 10">Stock above 10</option>
            </select>
        </div>
        </div>
        <div className='container'>
            <div className="row mt-3" >
                <div className="col-md-4 mb-3">
                <div className="card" >
                    <img src="https://i.ibb.co/W0b2zH3/oms-photo-matt-witherspoon-textile-photography-015-copy.jpg" className="card-img-top" alt="product image" style={{height:"400px", objectFit:"cover"}}/>    
                        <div className="card-body text-center">   
                        <p className="card-text"><strong> T Anish Silvestern</strong></p>
                        <p className="card-text"><strong>Stock: 10 </strong></p>
                        <p className="card-text"><strong>Price: ₹1000 </strong></p>
                        <Link className="btn btn-info me-2" to='/dashboard/full-details-product' >
                            Full Details
                        </Link>
                        <Link className="btn btn-primary me-2" to="/dashboard/edit-details-product" >
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

export default AllProducts
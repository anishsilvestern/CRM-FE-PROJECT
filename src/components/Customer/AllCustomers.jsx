import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomerContext } from '../Context/CustomerContext';
import axios from 'axios';

const AllCustomers = () => {

    const { customers, setCustomers } = useContext(CustomerContext);

    const [ customerFilter, setCustomerFilter ] = useState([])

    const token = localStorage.getItem('token')

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com" : "http://localhost:4000/"

    const [filterStatus, setFilterStatus] = useState('All')

    const filterStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '3rem',
        marginRight: '3rem'
    }

    // function for full details and edit customer
    const handleFullDetails = (customer) => {

        const customerId = customer.customerId

        localStorage.setItem('Customerid', customerId)
    }

    // fucntion for deleting a customer
    const handleDeleteCustomer = async (customer) => {

       const customerId = customer.customerId

         try {
            if(window.confirm("Are you sure you want to delete this customer?")) {
                console.log(customerId)
             const resDb = await axios.put(apiUrl + "delete-customer", {
                    customerId: customerId
             }, {
                    headers: {
                        auth: token
                    }
                })
                if(resDb.status === 200){
                    alert("Customer Deleted Successfully")
                     const res = await axios.get(apiUrl + "customers", {
                        headers: {
                            auth: token
                        }
                    })

                    const resData = res.data

                    setCustomers(resData)

                    if(filterStatus === "All"){
                        setCustomerFilter(resData)
                   } else {
                        const resFilter = resData.filter(customer => customer.status === filterStatus)
                        setCustomerFilter(resFilter)
                   }

                } else{
                    alert("Something went wrong")
                }
             } 
         } catch (error) {
            console.log(error)
            alert("Something went wrong error in delete")
         }
    }

    // function for filter change
    const handleFilterChange = async (e) => {
        console.log(e.target.value)
        setFilterStatus(e.target.value)
        try {
            if(e.target.value === "All"){
                setCustomerFilter(customers)
           } else {
                const resFilter = customers.filter(customer => customer.status === e.target.value)
                setCustomerFilter(resFilter)
           }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
            <h1>All Customers</h1>
        </div>
        <div>
        <div className="container-fluid" style={filterStyle}>
            <label htmlFor="filterStatus" id="filterStatus"><strong>Filter Status :</strong>&nbsp;&nbsp;</label>
            <select name="filter" id="filter" className="bg-info" onChange={handleFilterChange}>
                <option value="All" >All</option>
                <option value="Lead">Lead</option>
                <option value="Prospect">Prospect</option>
                <option value="Repeat Customer">Repeat Customer</option>
            </select>
        </div>
        </div>
        <div className='container'>
            <div className="row mt-3" >
            {customerFilter.length > 0 ? (customerFilter.map((customer, index) => (  
                <div className="col-md-4 mb-3" key={index}>
                    <div className='card' >
                        <div className="card-body" >
                        <p className="card-text">Customer Id:<strong className='text-danger'>{customer.customerId}</strong></p>
                        <p className="card-text">Name:<strong> {customer.name}</strong></p>
                        <p className="card-text">Sources:<strong> {customer.source}</strong></p>
                        <p className="card-text">Status:<strong> {customer.status}</strong></p>
                        <Link className="btn btn-info me-2" to="/dashboard/full-details-customer"  onClick={() => handleFullDetails(customer)} >
                            Full Details
                        </Link>
                        <Link className="btn btn-primary me-2" to="/dashboard/edit-details-customer" onClick={() => handleFullDetails(customer)} >
                            Edit
                        </Link>
                        <button className="deleteButton btn btn-danger" onClick={() => handleDeleteCustomer(customer)} >
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
                ))) : (customers.map((customer, index) => (  
                    <div className="col-md-4 mb-3" key={index}>
                        <div className='card' >
                            <div className="card-body" >
                            <p className="card-text">Customer Id:<strong className='text-danger'>{customer.customerId}</strong></p>
                            <p className="card-text">Name:<strong> {customer.name}</strong></p>
                            <p className="card-text">Sources:<strong> {customer.source}</strong></p>
                            <p className="card-text">Status:<strong> {customer.status}</strong></p>
                            <Link className="btn btn-info me-2" to="/dashboard/full-details-customer"  onClick={() => handleFullDetails(customer)} >
                                Full Details
                            </Link>
                            <Link className="btn btn-primary me-2" to="/dashboard/edit-details-customer" onClick={() => handleFullDetails(customer)} >
                                Edit
                            </Link>
                            <button className="deleteButton btn btn-danger" onClick={() => handleDeleteCustomer(customer)} >
                                Delete
                            </button>
                            </div>
                        </div>
                    </div>
                    ))) }
            </div>
        </div>
    </div>
  )
}

export default AllCustomers
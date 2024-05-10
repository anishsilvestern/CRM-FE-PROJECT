import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CustomerContext } from '../Context/CustomerContext';

const CustomerContact = () => {

    const { customers } = useContext(CustomerContext);

    // function for communication
    const handleCommunication =  (customer) => {   
        const customerId = customer.customerId
        localStorage.setItem('Communicationid', customerId)
    }

    // function for feedback
    const handleFeedback =  (customer) => { 
        const customerId = customer.customerId
        localStorage.setItem('Feedbackid', customerId)
    }


  return (
    <div>
        <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
            <h1>Customers Contact</h1>
        </div>
        <div className='container'>
            <div className="row mt-3" >
                {customers.map((customer, index) => (
                <div className="col-md-4 mb-3" key={index}>
                    <div className='card'>
                        <div className="card-body">
                        <p className="card-text">Customer ID: <strong>{customer.customerId}  </strong></p>
                        <p className="card-text">Name: <strong> {customer.name}</strong></p>
                        <p className="card-text">Phone Number: <strong> {customer.phone} </strong></p>
                        <p className="card-text">email: <strong>  {customer.email}</strong></p>
                        <Link className="btn btn-info me-2" to='/dashboard/communication' onClick={() => handleCommunication(customer)} >
                        Communication
                        </Link>
                        <Link className="btn btn-primary mx-1" to="/dashboard/feedback" onClick={() => handleFeedback(customer)}>
                            Feedback
                        </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CustomerContact
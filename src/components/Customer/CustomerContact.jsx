import React from 'react'
import { Link } from 'react-router-dom'

const CustomerContact = () => {
  return (
    <div>
        <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
            <h1>Customers Contact</h1>
        </div>
        <div className='container'>
            <div className="row mt-3" >
                <div className="col-md-4 mb-3">
                    <div className='card'>
                        <div className="card-body">
                        <p className="card-text"><strong>ID: 100  </strong></p>
                        <p className="card-text"><strong>Name: T Anish Silvestern</strong></p>
                        <p className="card-text"><strong>Phone Number: 9999999999 </strong></p>
                        <p className="card-text"><strong>email: neooanish@gmail.com </strong></p>
                        <Link className="btn btn-info me-2" to='/dashboard/communication' >
                        Communication
                        </Link>
                        <Link className="btn btn-primary mx-1" to="/dashboard/feedback" >
                            Feedback
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerContact
import React from 'react'
import { Link } from 'react-router-dom'

const Communication = () => {
    return (
        <div>
            <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
                <h1>Customer Name</h1>
            </div>
            <div className='container'>
                <div className="row mt-3" >
                    <div className="col-md-4 mb-3">
                        <div className='card'>
                            <div className="card-body">
                            <p className="card-text"><strong>Communication ID: 100  </strong></p>
                            <p className="card-text"><strong>Date: 10-05-2024</strong></p>
                            <p className="card-text"><strong>Method: Meeting </strong></p>
                            <p className="card-text"><strong>Content: This schema provides a basic structure to store customer profiles, purchase history, communication logs, and feedback in the CRM system. Depending on the specific needs and complexity of the Textile Shop, additional tables and attributes may be required to capture more detailed information and support additional functionalities. </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Communication
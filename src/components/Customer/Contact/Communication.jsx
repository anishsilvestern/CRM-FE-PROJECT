import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CommunicationContext } from "../../Context/CummunicationContext"

const Communication = () => {


    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com" : "http://localhost:4000/"
    const token = localStorage.getItem('token')


    const { communication } = useContext(CommunicationContext)

    console.log(communication)

    const communicationId = localStorage.getItem('Communicationid')

    const data = communication.filter(communication => communication.customer_id === communicationId)

    console.log(data)

     

    return (
        <div>
            <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
                <h1>Customer Name</h1>
            </div>
            <div className='container'>
                <div className="row mt-3" >
                  {data.map((data, index) => (  
                    <div className="col-md-4 mb-3" key={index}>
                        <div className='card'>
                            <div className="card-body">
                            <p className="card-text">Communication ID: <strong> {data.communication_id}  </strong></p>
                            <p className="card-text">Date:<strong> {data.date}</strong></p>
                            <p className="card-text">Method:<strong> {data.method} </strong></p>
                            <p className="card-text">Content:<strong> {data.content} </strong></p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      )
}

export default Communication
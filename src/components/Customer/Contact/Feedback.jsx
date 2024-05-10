import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CommunicationContext } from '../../Context/CummunicationContext'

const Feedback = () => {

    const feedbackId = localStorage.getItem('Feedbackid')

    const { feedback } = useContext(CommunicationContext)

    const feedbackData = feedback.filter(item => item.customer_id === feedbackId)

    console.log(feedbackData)


    return (
        <div>
            <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
                <h1>Customer Name</h1>
            </div>
            <div className='container'>
                <div className="row mt-3" >
                    {feedbackData.map((feedback, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className='card'>
                            <div className="card-body">
                            <p className="card-text">Feedback ID: <strong> {feedback.feedback_id}  </strong></p>
                            <p className="card-text">Date:<strong> {feedback.date}</strong></p>
                            <p className="card-text">Content:<strong> {feedback.content} </strong></p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      )
}

export default Feedback
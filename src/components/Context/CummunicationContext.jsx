import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CommunicationContext = createContext();

export const CommunicationProvider = ({ children }) => {

    const [ communication, setCommunication ] = useState([])
    const [ feedback, setFeedback ] = useState([])

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"

    const token = localStorage.getItem('token')

    const getCommunication = async () => {
        try {
            const response = await axios.get(apiUrl + "communication", {
                headers: {
                    auth: token
                }
            })
                setCommunication(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getFeedback = async () => {
        try {
            const response = await axios.get(apiUrl + "feedback", {
                headers: {
                    auth: token
                }
            })
                setFeedback(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
        getCommunication()
        getFeedback()
    }, [])


return (
    <CommunicationContext.Provider value={{ communication, feedback }} >
        {children}
    </CommunicationContext.Provider>
)

}
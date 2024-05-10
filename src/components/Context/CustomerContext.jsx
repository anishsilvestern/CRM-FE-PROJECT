import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"

    const [customers, setCustomers] = useState([])

    const customerFetch = async () => {
        const token = localStorage.getItem('token')

        const response = await axios.get(apiUrl + "customers", {
            headers: {
                auth: token
            }
        })

        setCustomers(response.data)
    }

    useEffect(() => {
        customerFetch()
    }, [])



    return (
        <CustomerContext.Provider value={{ customers, setCustomers }} >
            {children}
        </CustomerContext.Provider>
    )
}


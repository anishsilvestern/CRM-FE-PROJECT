import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"
    const token = localStorage.getItem('token')

    const [NewCustomers, setNewCustomers] = useState([])
    const [monthlyRevenues, setMonthlyRevenues] = useState([])
    const [ top50Product , setTop50Product ] = useState([])
    const [ topCustomers, setTopCustomers ] = useState([]);


    const getNewCustomers = async () => {
        try {
            const response = await axios.get(apiUrl + "new-customer", {
                headers: {
                    auth: token
                }
            })
                setNewCustomers(response.data)
        }catch (error) {
            console.log(error)
        }
    }

    const getMonthlyRevenues = async () => {
        try {
            const response = await axios.get(apiUrl + "monthly-revenue", {
                headers: {
                    auth: token
                }
            })
            setMonthlyRevenues(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTop50Product = async () => {
        try {
            const response = await axios.get(apiUrl + "top-50-highest-purchased-products", {
                headers: {
                    auth: token
                }
            })
            setTop50Product(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const topCustomer = async () => {
        try {
            const response = await axios.get(apiUrl + "most-purchased-customers", {
                headers: {
                    auth: token
                }
            })
            setTopCustomers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNewCustomers();
        getMonthlyRevenues();
        getTop50Product();
        topCustomer();
    }, [])






    return (
        <HomeContext.Provider value={{ NewCustomers, monthlyRevenues, top50Product, topCustomers }}>
            {children}
        </HomeContext.Provider>
    )
}
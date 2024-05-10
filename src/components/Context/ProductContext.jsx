import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"

    const token = localStorage.getItem('token')

    const getProducts = async () => {
        try {
            const response = await axios.get(apiUrl + "products", {
                headers: {
                    auth: token
                }
            })
                setProducts(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ products, setProducts }} >
            {children}
        </ProductContext.Provider>
    )
}
import { createContext, useEffect, useState } from "react";
import  { jwtDecode }  from "jwt-decode";
import axios from "axios";


export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  
   const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com" : "http://localhost:4000/"

   const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phoneNumber: "",
   })

   console.log(admin)

   const updateAdmin = async () => {
    const token = localStorage.getItem('token')
       if(token){
           const decoded = jwtDecode(token)

          const response = await axios.get(apiUrl + `admin/?email=${decoded.email}`, {
            headers: {
                auth: token
            }
          })
          console.log(response.data[0].email)
          setAdmin({
            name: response.data[0].name,
            email: response.data[0].email,
            phoneNumber: response.data[0].phoneNo,
          })
       }
   }
   
   useEffect(() => { 

        updateAdmin()
        
   }, [])
    
    return (
        <LoginContext.Provider value={{ admin }} >
            {children}
        </LoginContext.Provider>
    )

}
import React from 'react'
import './EmailSend.css'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import lock from "../assets/lock.svg"

const EmailSend = () => {

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"

  return (
    <div className='emailSendDiv'>
        <section className='Container'>
            <div className='d-flex justify-content-center'>
                <img style={{height: "100px"}} className='my-5' src={lock} />
            </div>
            <h1 className='text-center'><b>Forgot Password</b></h1>
            <p className='text-center'><b>Enter your registered email to reset your password.</b></p>
            <div className='d-flex justify-content-center'>
                <Formik 
                initialValues={{
                    email: ''
                }}

                validate={(values) => {
                    const errors = {};
                    if(!values.email) {
                        errors.email = 'Required';
                    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}

                onSubmit={ async (values) => {

                    const userCheck = await axios.get(apiUrl + `getAdmin/?email=${values.email.toLowerCase()}`);

                    if(userCheck.data.length !== 0) {
                        const sendEmail = await axios.get(apiUrl + `forget-password?email=${values.email.toLowerCase()}`);

                        if(sendEmail.data.length > 0){
                            alert('Email sent successfully')
                        }else {
                            alert('Email not sent')
                        }
                    }else {
                        alert('User not found')
                    }
                }}
                >
                <Form className='form-group'>
                    <div>
                    <Field id='forgot-email' name="email" type='email' className='form-control' placeholder='Email' />
                    <ErrorMessage name='email' component='div' className='text-danger' />
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                    <button id='resetBtn' type='submit' className='btn btn-primary mt-3 text-center'>reset</button>
                    </div>
                </Form>
                </Formik>
            </div> 
                <div id='forgotFooter' className='d-flex justify-content-center mt-3'>
                    <h5>New here? <Link style={{textDecoration: "none"}} to="/register">Sign Up.</Link></h5>
                    <h5>Already have an account? <Link style={{textDecoration: "none"}} to="/login">Sign In.</Link></h5>
                </div>
        </section>   
    </div>
  )
}

export default EmailSend
import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import './UserLogin.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/Logo.png'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'




const UserLogin = () => {

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com" : "http://localhost:4000/"


  return (
  <div
  >
     <section className="gradient-form" >
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                <div className="row g-0">
                    <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center">
                        <Link to="/"><img src={logo}
                            style={{width: "100px"}} alt="logo" /></Link>
                        <h1 className="mt-1 mb-5 pb-1">Hello,<b>Welcome Back!!!</b></h1>
                        </div>

                        <Formik
                        initialValues={{email: "", password: ""}}

                        validate={(values) => {
                            const error = {};
                            if(!values.email){
                                error.email = 'Required';
                            }
                            if(!values.password){
                                error.password = "Password Required"
                            } else if(values.password.length < 6){
                                error.password = "Password must be at least 6 characters"
                            }
                            return error;
                            }}
                            
                            onSubmit={ async (values) => {
                                const email = values.email.toLowerCase();
                                const password = values.password;

                                

                                try {
                                    const userCheck = await axios.get(apiUrl + `login/?email=${email}&password=${password}`);

                                    console.log(userCheck.data);
                                    const userData = userCheck.data;

                                    if(userData.length > 0){
                                        localStorage.setItem("token", userData);
                                        window.location.href = "/dashboard";
                                    }
                                } catch (error) {
                                   alert("Invalid Credentials")
                                }
                                
                            }
                        }>
                            <Form>
                            <p>Please login to your account</p>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <Field type="email" name="email" id="email" className="form-control"
                                placeholder="email address" />
                                <ErrorMessage name='email' component="div" className='text-danger' />
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <Field type="password" name="password" id="Password" className="form-control" placeholder='Password' />
                                <ErrorMessage name='password' component="div" className='text-danger' />
                            </div>

                            <div className="text-center pt-1 mb-3 pb-1">
                                <button id='loginBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                                in</button>
                                <div>
                                    <Link className="text-muted" to="/email-send">Forgot password?</Link>
                                </div>
                            </div>
                            </Form>
                        </Formik>

                        {/* <div className="text-center">
                          <Link to="/customer-fil-form"><button id='createBtn' className="btn btn-info btn-block fa-lg gradient-custom-2 mb-3" type="submit">Customer Fill Form</button></Link>
                        </div> */}

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <p className="mb-0 me-2">Don't have an account?</p>
                                <Link to="/register"><button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Create new</button></Link>
                            </div>
                            <div className="col-lg-6 d-flex  align-items-center justify-content-center gradient-custom-2 ms-4">
                                <Link to="/"  className="text-white">
                                    <img src={facebook} alt="Facebook" />
                                </Link>
                                <Link to="/"  className="text-white">
                                    <img src={twitter} alt="twitter" />
                                </Link>
                                <Link to="/"  className="text-white">
                                    <img src={youtube} alt="youtube" />
                                </Link>
                                <Link to="/" className="text-white">
                                    <img src={instagram} alt="instagram" />
                                </Link>
                            </div>

                            

                    </div>
                    </div>
                    <div id='imgDiv' className="col-sm-6 px-0">
                        <img src="https://i.ibb.co/c1N2s0t/oms-photo-matt-witherspoon-textile-photography-015.jpg"
                        alt="Login image" className="w-100 h-100 vh-50" style={{objectfit: "cover", objectPosition: "left"}} />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  </div>
);

}

export default UserLogin
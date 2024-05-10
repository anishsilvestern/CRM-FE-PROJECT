import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import "./UserRegister.css"
import axios from 'axios';


const UserRegister = () => {

  const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com" : "http://localhost:4000/"

  return (
    <div>
     <section className="gradient-form background-image" >
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                <div className="row g-0">
                    <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center">
                        <Link to="/"><img src="/src/assets/Logo.png"
                            style={{width: "100px"}} alt="logo" /></Link>
                        </div>
                        
                        {/* Formik  */}
                        <Formik 
                            initialValues={{name: "", email: "", phoneNumber: "", password: "", confirmPassword: ""}}

                            validate={(values) => {
                                const error = {};
                                  if(!values.name){
                                    error.name = "name is required"
                                  }if(!values.email){
                                    error.email = "email is required"
                                  }
                                  if(!values.phoneNumber){
                                    error.phoneNumber = "PhoneNumber is required"
                                  } else if(!/^\d+$/.test(values.phoneNumber)) {
                                    error.phoneNumber = 'Please enter numbers only';
                                  }  else if (values.phoneNumber.length !== 10) {
                                    error.phoneNumber = "Phone number must be 10 digits"
                                  }
                                  if(!values.password){
                                    error.password = "password is required"
                                  } else if(values.password.length < 6){
                                    error.password = "password must be at least 6 characters"
                                  } 
                                  if(!values.confirmPassword){
                                    error.confirmPassword = "Confirm Password is required"
                                  } else if(values.confirmPassword!== values.password){
                                    error.confirmPassword = "Passwords do not match"
                                  }
                                  return error;
                            }}

                            onSubmit={ async (values) => {

                            try {
                              const email = values.email.toLowerCase()

                              const userCheck = await axios.get(apiUrl + `getAdmin/?email=${email}`)

                              console.log(userCheck)

                              if(userCheck.data.length === 0){
                                const sendDb = await axios.post(apiUrl + `register`, {
                                name: values.name.trim(),
                                email: values.email.toLowerCase(),
                                phoneNumber: values.phoneNumber,
                                password: values.password,
                            })
                             if(sendDb.status === 200){
                                alert("User created successfully")
                                window.location.href = "/login"
                             } else {
                                alert("User not created")
                             }
                              } else {
                                alert("User already exists")
                                }
                            } catch (error) {
                               console.log("Error")
                            }}}>
                              
                            <Form>

                                <h3 className='my-4 text-center'>Fill your details below</h3>
                                {/* Name Field  */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <Field type="text" name="name" id="name" className="form-control"
                                    placeholder="name" />
                                    <ErrorMessage name="name" component="div" className="text-danger" />
                                </div>
                                {/* Email Field  */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <Field type="email" name="email" id="email" className="form-control"
                                    placeholder="email" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                {/* Phone Number Field  */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <Field id="number" name="phoneNumber" className="form-control"
                                    placeholder="Phone number" />
                                    <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                                </div>
                                {/* Password Field  */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <Field type="password" id="Password" name="password" className="form-control" placeholder='Password' />
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </div>
                                {/* Confirm Password Field  */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <Field type="password" id="confirm-Password" name="confirmPassword"className="form-control" placeholder='confirm Password' />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                </div>
                                {/* Button Field  */}
                                <div className="text-center mt-5">
                                <button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Create Account</button>
                                </div>
                            </Form>
                        </Formik>

                        {/* <div className="text-center">
                          <Link to="/customer-fil-form"><button id='createBtn' className="btn btn-info btn-block fa-lg gradient-custom-2 mb-3" type="submit">Customer Fill Form</button></Link>
                        </div> */}

                    </div>
                    </div>
                    <div id='imgDiv' className="col-sm-6 px-0">
                        <img src="https://i.ibb.co/W0b2zH3/oms-photo-matt-witherspoon-textile-photography-015-copy.jpg"
                        alt="Login image" className="w-100 h-100 vh-50" style={{objectfit: "cover", objectPosition: "left"}} />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  </div>
  )
}

export default UserRegister
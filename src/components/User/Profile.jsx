import { Field, Form, Formik, ErrorMessage} from 'formik'
import React, { useContext } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'
import axios from 'axios'
import home from "../assets/home.png"
import mail from "../assets/mail.png"
import user from "../assets/user.png"
import phoneCall from "../assets/phone-call.png"

const Profile = () => {

  const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"

  const { admin } = useContext(LoginContext)

  return (
    <div>
        <div>
            <div className='row text-center p-3 bg-danger' style={{color:"white"}} >
              <div className="col">
                <Link to="/dashboard"><img id='homeImg' src={home}/></Link>
              </div>
              <div className="col-11">
                <h2><b>{admin.name}</b></h2>
              </div>
            </div>
            <Formik 
            initialValues={{name: admin ? admin.name : '', email:admin ? admin.email : '',  phoneNumber:admin ? admin.phoneNumber : '' }}

            enableReinitialize={true}

            onSubmit={ async (values) => {
                const updateAdminDb = await axios.put(apiUrl + "update-admin", {
                    name: values.name,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                }, {
                  headers: {
                    auth: localStorage.getItem('token')
                  }
                })
                console.log(updateAdminDb)
                if(updateAdminDb.status === 200){
                  alert("Profile Updated")
                } else {
                  alert("Profile Not Updated")
                }
            }}
            >
            {/* dirty is a boolean value that is true when the form is dirty and false when the form is pristine */}
            {({dirty}) => (
              <Form>
                {/* Name */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={user}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="name" id="name"  className="form-control" placeholder="name"  />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>
                </div>
              {/* email */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={mail}/>
                    </div>
                    <div className="col-11">
                      <Field type="email" name="email" id="email" className="form-control"
                      placeholder="email" readOnly />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                </div>
                
              {/* Phone Number */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={phoneCall}/>
                    </div>
                    <div className="col-11">
                      <Field id="number" name="phoneNumber" className="form-control"
                      placeholder="Phone number" />
                      <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                    </div>
                </div>
              {dirty ? <div className="text-center mt-5">
                <button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Submit Changes</button>
                </div> : <div className="text-center mt-5">
                <button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" disabled>Submit Changes</button>
                </div>}
              </Form>
              )}
            </Formik>
        </div>
    </div>
  )
}

export default Profile
import { Field, Form, Formik, ErrorMessage} from 'formik'
import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <div>
            <div className='row text-center p-3 bg-danger' style={{color:"white"}} >
              <div className="col">
                <Link to="/dashboard"><img id='homeImg' src="/src/assets/home.png"/></Link>
              </div>
              <div className="col-11">
                <h2><b>T Anish Silvestern</b></h2>
              </div>
            </div>
            <Formik 
            initialValues={{name:"Anish", email:"neooanish@gmail.com", address:"aanisasasnjdnnn dsndnsdk", phoneNumber:"6532326598"}}

            onSubmit={(values) => {
              console.log(values);
            }}
            >
            {/* dirty is a boolean value that is true when the form is dirty and false when the form is pristine */}
            {({dirty}) => (
              <Form>
                {/* Name */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/user.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="name" id="name"  className="form-control" placeholder="name"  />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>
                </div>
              {/* email */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/mail.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="email" name="email" id="email" className="form-control"
                      placeholder="email" readOnly />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                </div>
                {/* address */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/location.png"/>
                    </div>
                    <div className="col-11">
                      <Field as="textarea" name="address" id="address" className="form-control"
                      placeholder="address" />
                      <ErrorMessage name="address" component="div" className="text-danger" />
                    </div>
                </div>
              {/* Phone Number */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/phone-call.png"/>
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
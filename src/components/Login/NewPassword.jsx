import React from 'react'
import { Link } from 'react-router-dom'
import './NewPassword.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const NewPassword = () => {
  return (
    <div className='newPasswordDiv'>
        <section className='Container'>
        <div className='d-flex justify-content-center'>
                <img style={{height: "100px"}} className='my-5' src='/src/assets/key.svg' />
            </div>
            <h1 className='text-center'><b>New Password</b></h1>
            <p className='text-center'><b>Enter your New password.</b></p>
            <div className='d-flex justify-content-center'>
                <Formik
                initialValues={{
                  newPassword: '',
                  confirmNewPassword: ''
                }}

                validate={(values) => {
                    const errors = {};
                    if (!values.newPassword) {
                      errors.newPassword = 'Required';
                    } else if (values.newPassword.length < 6) {
                      errors.newPassword = 'Must be 6 characters or more';
                    }
                    if(values.newPassword !== values.confirmNewPassword) {
                        errors.confirmNewPassword = 'Passwords do not match';
                    }
                    return errors;
                }}


                onSubmit={(values) => {
                  console.log(values)
                }}
                >
                    <Form className='form-group'>
                        <div>
                        <Field id='newPassword' name="newPassword" type='text' className='form-control' placeholder='New Password' />
                        <ErrorMessage name="newPassword" component= 'div' className='text-danger' />
                        </div>
                        <div>
                        <Field id='Confirm-New-Password' name="confirmNewPassword" type='text' className='form-control mt-3' placeholder='Confirm New Password' />
                        <ErrorMessage name="confirmNewPassword" component= 'div' className='text-danger' />
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button className='btn btn-primary mt-3 text-center' type='submit' >reset</button>
                        </div>
                    </Form>
                </Formik>
            </div> 
                <div className='mt-5'><p>.</p></div>
        </section>   
    </div>
  )
}

export default NewPassword
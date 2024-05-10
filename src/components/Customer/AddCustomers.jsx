import axios from 'axios';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import React, { useContext } from 'react'
import { PrefernceContext } from '../Context/PreferenceContext';


const AddCustomers = () => {

  const { fabricType, colours, designs, status, sources } = useContext(PrefernceContext);

  const token = localStorage.getItem('token')

  const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com" : "http://localhost:4000/"

  return (
    <div>
      <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
            <h1>Add Customer</h1>
      </div>

      <Formik 
            initialValues={{name:"", email:"", address:"", phoneNumber:"", sources:"", status:"", fabricType:[], colour:[], design:[]}}

            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }if (!values.email) {
                errors.email = 'Required';
              }if (!values.address) {
                errors.address = 'Required';
              }if(!values.phoneNumber){
                errors.phoneNumber = "PhoneNumber is required"
              } else if(!/^\d+$/.test(values.phoneNumber)) {
                errors.phoneNumber = 'Please enter numbers only';
              }  else if (values.phoneNumber.length !== 10) {
                errors.phoneNumber = "Phone number must be 10 digits"
              }if (!values.sources) {
                errors.sources = 'Required';
              }if (!values.status) {
                errors.status = 'Required';
              }if(values.fabricType.length <= 2){
                errors.fabricType = 'Required';
              }if(values.colour.length <= 2 ){
                errors.colour = 'Required';
              }if(values.design.length <= 2){
                errors.design = 'Required';
              }
              return errors;
            }}

            onSubmit={ async (values) => {
                try {
                  const AddCustomer = await axios.post(apiUrl + "add-customer", {
                    name: values.name,
                    email: values.email.toLowerCase(),
                    address: values.address,
                    phone: values.phoneNumber,
                    source: values.sources,
                    status: values.status,
                    fabricType: values.fabricType,
                    colour: values.colour,
                    design: values.design
                  }, {
                    headers: {
                      auth: token
                    }
                  })
                  if(AddCustomer.status === 200){
                    alert("Customer Added Successfully")
                    window.location.reload()
                  }else {
                    alert("Customer Not Added")
                  }
                } catch (error) {
                    console.log(error)
                    alert("Customer Not Added Please try again")
                }
            }}
            >
              <Form>
                {/* name */}
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
                      placeholder="email" />
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
                      placeholder="address" style={{height:"100px"}} />
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
                {/* Sources */}
                <div data-mdb-input-init className="row form-outline m-4">
                  <div className='col-1'>
                  <label htmlFor="sources">Sources:</label>
                  </div>
                  <div className="col-11">
                    
                    <Field as="select" id="sources" name="sources" className="form-control">
                      <option value="">Select a source</option>
                      {sources.map((source, index) => (
                      <option value={source} key={index}>{source}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="sources" component="div" className="text-danger" />
                  </div>
                </div>
                {/* Status */}
                <div data-mdb-input-init className="row form-outline m-4">
                  <div className='col-1'>
                  <label htmlFor="status">Status:</label>
                  </div>
                  <div className="col-11">
                    
                    <Field as="select" id="status" name="status" className="form-control">
                      <option value="">Select a source</option>
                      {status.map((status, index) => (
                      <option value={status} key={index}>{status}</option>
                    ))}
                    </Field>
                    <ErrorMessage name="status" component="div" className="text-danger" />
                  </div>
                </div>

                <div className='text-center mt-5'>
                  <h3>Textiles Prefernce</h3>
                </div>
                {/* Fabric Type */}
                <div className="row form-outline m-4">
                  <div className='col-1'>
                    <img style={{width:"40px"}} src="/src/assets/fabric.png" alt="Icon" />
                  </div>
                  <div className="col-11">
                    <label htmlFor="fabricType">Fabric Type:</label>
                    <div className="row">

                    {fabricType.map((fabric, index) => ( 
                    <div className='col-3 ' key={index}>
                      <Field type="checkbox" id={`sourceOption${index}`} name="fabricType" value={fabric} />
                      <label className='ms-1' htmlFor={fabric}>{fabric}</label>
                    </div>

                    ))}
                    </div>
                    <ErrorMessage name="fabricType" component="div" className="text-danger" />
                  </div>
                </div>
                {/* Colour */}
                <div className="row form-outline m-4">
                  <div className='col-1'>
                    <img style={{width:"40px"}} src="/src/assets/chromatic.png" alt="Icon" />
                  </div>
                  <div className="col-11">
                    <label htmlFor="colour">Colours:</label>
                    <div className="row">

                    {colours.map((colour, index) => ( 
                    <div className='col-3 ' key={index}>
                      <Field type="checkbox" id={`sourceOption${index}`} name="colour" value={colour} />
                      <label className='ms-1' htmlFor={colour}>{colour}</label>
                    </div>
                    
                    ))}
                    </div>
                    <ErrorMessage name="colour" component="div" className="text-danger" />
                  </div>
                </div>
                    {/* Design */}
                <div className="row form-outline m-4">
                  <div className='col-1'>
                    <img style={{width:"40px"}} src="/src/assets/batik.png" alt="Icon" />
                  </div>
                  <div className="col-11">
                    <label htmlFor="design">Designs:</label>
                    <div className="row">

                    {designs.map((design, index) => ( 
                    <div className='col-3 ' key={index}>
                      <Field type="checkbox" id={`sourceOption${index}`} name="design" value={design} />
                      <label className='ms-1' htmlFor={design}>{design}</label>
                    </div>
                    
                    ))}
                    </div>
                    <ErrorMessage name="design" component="div" className="text-danger" />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Add Customer</button>
                </div>
              </Form>
            </Formik>
    </div>
  )
}

export default AddCustomers
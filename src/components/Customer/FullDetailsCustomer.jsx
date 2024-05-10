import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CustomerContext } from '../Context/CustomerContext';
import { PrefernceContext } from '../Context/PreferenceContext';

const FullDetailsCustomer = () => {

    const { fabricType, colours, designs, status, sources } = useContext(PrefernceContext);

    const { customers } = useContext(CustomerContext);

    const Customerid = localStorage.getItem('Customerid')

    const data = customers.find(customer => customer.customerId === Customerid)


    const handleLocalRemove = () => {
       if(window.location.pathname !== "/dashboard/full-details-customer") {
          localStorage.clear("Customerid")
       }
    }

  return (
    <div>
      <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
            <h1>{data? `Customer Id: ${data.customerId}` : "Customer Id"}</h1>
      </div>

      <Formik 
            initialValues={{name:data ? data.name : "", email:data ? data.email : "", address:data ? data.address : "", phoneNumber:data ? data.phone : "", sources:data ? data.source : "", status:data ? data.status : "", fabricType:data ? data.fabricType : "", colour:data ? data.colour : "", design:data ? data.design : ""}}

          enableReinitialize={true}

            >
              <Form>
                {/* name */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/user.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="name" id="name"  className="form-control" placeholder="name" readOnly  />
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
                    </div>
                </div>
                {/* address */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/location.png"/>
                    </div>
                    <div className="col-11">
                      <Field as="textarea" name="address" id="address" className="form-control"
                      placeholder="address" style={{height:"100px"}} readOnly />
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
                    </div>
                </div>
                {/* Sources */}
                <div data-mdb-input-init className="row form-outline m-4">
                  <div className='col-1'>
                  <label htmlFor="sources">Sources:</label>
                  </div>
                  <div className="col-11">
                    
                    <Field id="sources" name="sources" className="form-control" readOnly />
                  </div>
                </div>
                {/* Status */}
                <div data-mdb-input-init className="row form-outline m-4">
                  <div className='col-1'>
                  <label htmlFor="status">Status:</label>
                  </div>
                  <div className="col-11">
                    
                    <Field id="status" name="status" className="form-control" readOnly />
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
                      <Field type="checkbox" id={`sourceOption${index}`} name="fabricType" value={fabric}  />
                      <label className='ms-1' htmlFor={fabric}>{fabric}</label>
                    </div>
                    ))}
                    </div>
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
                  </div>
                </div>
                <div className="text-center mt-5">
                  <Link to="/dashboard/all-customers" onClick={handleLocalRemove}><button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Back</button></Link>
                </div>
              </Form>
            </Formik>
    </div>
  )
}

export default FullDetailsCustomer
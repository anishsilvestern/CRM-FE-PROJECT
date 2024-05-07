import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';

const FullDetailsCustomer = () => {
    const fabricType = ['Cotton', 'Polyester', 'Silk', 'Wool', 'Nylon', 'Leather'];
    const colours = ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow'];
    const designs = ["Print Design", 'Woven Design', 'Knitted Design', 'Non-Woven Design', "Embroidery Design", "Digital Textile Design", 'Fashion Textile Design', "Home Textile Design"];

  return (
    <div>
      <div className='text-center p-3 bg-secondary' style={{color:"white", fontFamily:"sans-serif"}}>
            <h1>Customer Name</h1>
      </div>

      <Formik 
            initialValues={{name:"Anish", email:"neooanish@gmail.com", address:"mannipady", phoneNumber:"3216549879", sources:"facebook", status:"lead", fabricType:["Cotton", "Polyester"], colour:["Black", "Blue"], design:[]}}
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
                  <Link to="/dashboard/all-customers"><button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Back</button></Link>
                </div>
              </Form>
            </Formik>
    </div>
  )
}

export default FullDetailsCustomer
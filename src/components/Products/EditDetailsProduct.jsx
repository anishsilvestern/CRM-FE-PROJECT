import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'

const EditDetailsProduct = () => {
    const fabricType = ['Cotton', 'Polyester', 'Silk', 'Wool', 'Nylon', 'Leather'];
    const colours = ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow'];
    const designs = ["Print Design", 'Woven Design', 'Knitted Design', 'Non-Woven Design', "Embroidery Design", "Digital Textile Design", 'Fashion Textile Design', "Home Textile Design"];
  return (
    <div>
        <div className='text-center p-3' style={{color:"black", fontFamily:"sans-serif", backgroundColor:"#70FFCD"}}>
            <h1>Add Product</h1>
        </div>
        <Formik 
        initialValues={{productId:"", productName:"",productDescription:"", fabric:'', colour:'', design:'', productPrice:"", productStocks:"", productImageUrl:""}}

        validate={(values) => {
            const errors = {};
            if (!values.productId) {
                errors.productId = 'Required';
            }if (!values.productName) {
                errors.productName = 'Required';
            }if (!values.productDescription) {
                errors.productDescription = 'Required';
            }if (!values.fabric) {
                errors.fabric = 'Required';
            }if (!values.colour) {
                errors.colour = 'Required';
            }if (!values.design) {
                errors.design = "Required";
            }if(!values.productPrice) {
                errors.productPrice = "Required"
            }else if(!/^\d+$/.test(values.productPrice)) {
                errors.productPrice = 'Please enter numbers only';
            }if(values.productStocks <= 0){
                errors.productStocks = "Required"
            }else if(!/^\d+$/.test(values.productStocks)) {
                errors.productStocks = 'Please enter numbers only';
            }if(!values.productImageUrl) {
                errors.productImageUrl = "Required"
            } 
            return errors;
        }}

        onSubmit={(values) => {
            console.log(values);
        }}
        >
            <Form>
                {/* product Id */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/product.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productId" id="productId"  className="form-control" placeholder="Product Id"  />
                      <ErrorMessage name="productId" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product name */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/box.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productName" id="productName"  className="form-control" placeholder="Product Name"  />
                      <ErrorMessage name="productName" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product description */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/product-description.png"/>
                    </div>
                    <div className="col-11">
                      <Field as="textarea" type="text" name="productDescription" id="productDescription"  className="form-control" placeholder="Product description" style={{height:"100px"}}  />
                      <ErrorMessage name="productDescription" component="div" className="text-danger" />
                    </div>
                </div>
                {/* Fabric type */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/fabric.png"/>
                    </div>
                    <div className="col-11">
                    <Field as="select" id="fabric" name="fabric" className="form-control">
                      <option value="">Select a source</option>
                      {fabricType.map((fabric, index) => (
                      <option value={fabric} key={index}>{fabric}</option>
                    ))}
                    </Field>
                      <ErrorMessage name="fabric" component="div" className="text-danger" />
                    </div>
                </div>
                {/* Colour */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/chromatic.png"/>
                    </div>
                    <div className="col-11">
                    <Field as="select" id="colour" name="colour" className="form-control">
                      <option value="">Select a source</option>
                      {colours.map((colour, index) => (
                      <option value={colour} key={index}>{colour}</option>
                    ))}
                    </Field>
                      <ErrorMessage name="colour" component="div" className="text-danger" />
                    </div>
                </div>
                {/* Designs */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/batik.png"/>
                    </div>
                    <div className="col-11">
                    <Field as="select" id="design" name="design" className="form-control">
                      <option value="">Select a source</option>
                      {designs.map((design, index) => (
                      <option value={design} key={index}>{design}</option>
                    ))}
                    </Field>
                      <ErrorMessage name="design" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product Price */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/price-tag.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productPrice" id="productPrice"  className="form-control" placeholder="Product Price" />
                      <ErrorMessage name="productPrice" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product Stocks */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/productstock.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productStocks" id="productStocks"  className="form-control" placeholder="Product Stocks" />
                      <ErrorMessage name="productStocks" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product Image */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src="/src/assets/link.png"/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productImageUrl" id="productImageUrl"  className="form-control" placeholder="Product Image Url" />
                      <ErrorMessage name="productImageUrl" component="div" className="text-danger" />
                    </div>
                </div>
                <div className="text-center mt-5">
                  <button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Add Product</button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default EditDetailsProduct
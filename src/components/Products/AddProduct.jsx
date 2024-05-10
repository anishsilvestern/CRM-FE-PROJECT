import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { PrefernceContext } from '../Context/PreferenceContext';
import axios from 'axios';
import box from "../assets/box.png"
import Description from "../assets/product-description.png"
import fabric from "../assets/fabric.png"
import chromatic from "../assets/chromatic.png"
import batik from "../assets/batik.png"
import priceTag from "../assets/price-tag.png"
import stock from "../assets/productstock.png"
import link from "../assets/link.png"


const AddProduct = () => {

  const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"

  const token = localStorage.getItem('token')

  const { fabricType, colours, designs, status, sources } = useContext(PrefernceContext);

  return (
    <div>
        <div className='text-center p-3' style={{color:"black", fontFamily:"sans-serif", backgroundColor:"#70FFCD"}}>
            <h1>Add Product</h1>
        </div>
        <Formik 
        initialValues={{productName:"",productDescription:"", fabric:'', colour:'', design:'', productPrice:"", productStocks:"", productImageUrl:""}}

        validate={(values) => {
            const errors = {};
            if (!values.productName) {
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

        onSubmit={ async (values) => {
            try {
              const resBd = await axios.post(apiUrl + "add-product", {
                Name: values.productName,
                Description: values.productDescription,
                FabricType: values.fabric,
                Color: values.colour,
                DesignType: values.design,
                Price: values.productPrice,
                Stock: values.productStocks,
                PhotoUrl: values.productImageUrl
              }, {
                headers: {
                  auth: token
                }
              })

              if(resBd.status === 200) {
                alert("Product added successfully");
                window.location.href = "/dashboard/all-products";
              }else {
                alert("Product not added");
              }
              
            } catch (error) {
               alert("intenal server error");
            }
        }}
        >
            <Form>
                {/* product name */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={box}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productName" id="productName"  className="form-control" placeholder="Product Name"  />
                      <ErrorMessage name="productName" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product description */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={Description}/>
                    </div>
                    <div className="col-11">
                      <Field as="textarea" type="text" name="productDescription" id="productDescription"  className="form-control" placeholder="Product description" style={{height:"100px"}}  />
                      <ErrorMessage name="productDescription" component="div" className="text-danger" />
                    </div>
                </div>
                {/* Fabric type */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={fabric}/>
                    </div>
                    <div className="col-11">
                    <Field as="select" id="fabric" name="fabric" className="form-control">
                      <option value="">Select a Fabric Type</option>
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
                      <img style={{width:"40px"}} src={chromatic}/>
                    </div>
                    <div className="col-11">
                    <Field as="select" id="colour" name="colour" className="form-control">
                      <option value="">Select a Colour</option>
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
                      <img style={{width:"40px"}} src={batik}/>
                    </div>
                    <div className="col-11">
                    <Field as="select" id="design" name="design" className="form-control">
                      <option value="">Select a Design</option>
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
                      <img style={{width:"40px"}} src={priceTag}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productPrice" id="productPrice"  className="form-control" placeholder="Product Price" />
                      <ErrorMessage name="productPrice" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product Stocks */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={stock}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productStocks" id="productStocks"  className="form-control" placeholder="Product Stocks" />
                      <ErrorMessage name="productStocks" component="div" className="text-danger" />
                    </div>
                </div>
                {/* product Image */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={link}/>
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

export default AddProduct
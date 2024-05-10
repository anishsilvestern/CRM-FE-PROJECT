import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import box from "../assets/box.png"
import Description from "../assets/product-description.png"
import fabric from "../assets/fabric.png"
import chromatic from "../assets/chromatic.png"
import batik from "../assets/batik.png"
import priceTag from "../assets/price-tag.png"
import stock from "../assets/productstock.png"
import link from "../assets/link.png"
import star from "../assets/star.png"

const FullDetailsProduct = () => {

  const { products } = useContext(ProductContext);

  const productId = localStorage.getItem('ProductId')

  const product = products.find(product => product.productId === productId)

  return (
    <div>
        <div className='text-center p-3' style={{color:"black", fontFamily:"sans-serif", backgroundColor:"#70FFCD"}}>
            <h1>Product Id: <b>{ productId }</b></h1>
        </div>
        <Formik 
        initialValues={{productRating:product ? product.Rating : "", productName:product ? product.Name : "",productDescription:product ? product.Description : "", fabric:product ? product.FabricType : "", colour:product ? product.Color : "", design:product ? product.DesignType : "", productPrice:product ? product.Price : "", productStocks:product ? product.Stock : "", productImageUrl:product ? product.PhotoUrl : ""}}

        enableReinitialize={true}
        >
            <Form>
                {/* product name */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={box}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productName" id="productName"  className="form-control" placeholder="Product Name"  readOnly/>
                    </div>
                </div>
                {/* product description */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={Description}/>
                    </div>
                    <div className="col-11">
                      <Field as="textarea" type="text" name="productDescription" id="productDescription"  className="form-control" placeholder="Product description" style={{height:"100px"}} readOnly  />
                    </div>
                </div>
                {/* product Rating */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={star}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productRating" id="productRating"  className="form-control" placeholder="productRating" readOnly  />
                    </div>
                </div>
                {/* Fabric type */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={fabric}/>
                    </div>
                    <div className="col-11">
                    <Field id="fabric" name="fabric" className="form-control" placeholder="fabric" readOnly/>
                    </div>
                </div>
                {/* Colour */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={chromatic}/>
                    </div>
                    <div className="col-11">
                    <Field  id="colour" name="colour" className="form-control" readOnly/>
                    </div>
                </div>
                {/* Designs */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={batik}/>
                    </div>
                    <div className="col-11">
                    <Field id="design" name="design" className="form-control" readOnly />
                    </div>
                </div>
                {/* product Price */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={priceTag}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productPrice" id="productPrice"  className="form-control" placeholder="Product Price" readOnly/>
                    </div>
                </div>
                {/* product Stocks */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={stock}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productStocks" id="productStocks"  className="form-control" placeholder="Product Stocks" readOnly />

                    </div>
                </div>
                {/* product Image */}
                <div data-mdb-input-init className="row form-outline m-4">
                    <div className='col-1'>
                      <img style={{width:"40px"}} src={link}/>
                    </div>
                    <div className="col-11">
                      <Field type="text" name="productImageUrl" id="productImageUrl"  className="form-control" placeholder="Product Image Url" readOnly/>

                    </div>
                </div>
                <div className="text-center mt-5">
                  <Link to="/dashboard/all-products">
                  <button id='createBtn' className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Back</button>
                  </Link>
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default FullDetailsProduct
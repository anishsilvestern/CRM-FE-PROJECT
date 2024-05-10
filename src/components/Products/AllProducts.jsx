import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../Context/ProductContext';
import axios from 'axios';

const AllProducts = () => {

    const { products, setProducts } = useContext(ProductContext);

    const apiUrl = import.meta.env.VITE_LOCAL_URL === "production" ? "https://crm-be-project.onrender.com/" : "http://localhost:4000/"

    const token = localStorage.getItem('token')

    const [ filteredProducts, setFilteredProducts ] = useState([])

    console.log(filteredProducts)

    const [filterStatus, setFilterStatus] = useState('All')

    // css style
    const filterStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '3rem',
        marginRight: '3rem'
    }

    // fucntion for filtering products
    const handleFilterChange = (e) => {
        const filter = e.target.value
        setFilterStatus(filter)
        console.log(filter)
        const filteredProducts = products.filter(product => 
            {if(filter === "Price below 1000") {
                return product.Price < 1000;
            } else if(filter === "Price above 1000") {
                return product.Price >= 1000;
            } else if (filter === "Stock above 100") {
                return product.Stock >= 100;
            } else if (filter === "Stock below 100") {
                return product.Stock < 100;
            } else if (filter === "All") {{
                return product;
            }}}
        )
        setFilteredProducts(filteredProducts)
    }

    // function for full details and edit customer
    const handleDetails = (product) => {
        localStorage.setItem('ProductId', product.productId)
    }

    // fucntion for deleting a product
    const handleDelete = async (product) => {
        console.log(product.productId)
        try {
            if(window.confirm("Are you sure you want to delete this product?")) {
                console.log(product.productId)
                const res = await axios.put(apiUrl + "delete-product",{
                    productId: product.productId
                },
                 {
                    headers: {
                        auth: token
                    }
                })
                if(res.status === 200){
                    
                    const resDb = await axios.get(apiUrl + "products", {
                        headers: {
                            auth: token
                        }
                    })
                    const data = resDb.data;

                    setProducts(data)

                    const filteredProducts = data.filter(product => 
                        {if(filterStatus === "Price below 1000") {
                            return product.Price < 1000;
                        } else if(filterStatus === "Price above 1000") {
                            return product.Price >= 1000;
                        } else if (filterStatus === "Stock above 100") {
                            return product.Stock >= 100;
                        } else if (filterStatus === "Stock below 100") {
                            return product.Stock < 100;
                        } else if (filterStatus === "All") {{
                            return product;
                        }}}
                    )
                    setFilteredProducts(filteredProducts)


                } else{
                    alert("Error deleting product")
                }
            }
            
        } catch (error) {
            console.log(error)
            alert("Error deleting product error")
        }
    }


  return (
    <div>
        <div className='text-center p-3' style={{color:"black", fontFamily:"sans-serif", backgroundColor:"#70FFCD"}}>
            <h1>All Products</h1>
        </div>
        <div>
        <div className="container-fluid" style={filterStyle}>
            <label htmlFor="filterStatus" id="filterStatus"><strong>Filter Status :</strong>&nbsp;&nbsp;</label>
            <select name="filter" id="filter" className="bg-info" onChange={handleFilterChange}>
                <option value="All" >All</option>
                <option value="Price below 1000">Price below 1000</option>
                <option value="Price above 1000">Price above 1000</option>
                <option value="Stock below 100">Stock below 100</option>
                <option value="Stock above 100">Stock above 100</option>
            </select>
        </div>
        </div>
        {filteredProducts.length > 0 ? (<div className='container'> 
            <div className="row mt-3" >
              {filteredProducts.map((product, index) => (  
                <div className=" col-md-4 mb-3" key={index}>
                <div className="card">
                    <img src={product.PhotoUrl} className="card-img-top" alt="product image" style={{height:"400px", objectFit:"cover"}}/>    
                    <div style={{position:"absolute",borderRadius:"10px", backgroundColor:"#1BB6FF", color:"white", padding:"10px", top:"10px", right:"10px", fontSize:"20px", fontWeight:"bold", fontFamily:"sans-serif", height:"50px"}}>
                        <p><b>{product.Rating}</b></p>
                    </div>
                        <div className="card-body text-center">   
                        <p className="card-text"><strong style={{fontSize:"25px", color:"#0013FF"}}> {product.Name}</strong></p>
                        <p className="card-text">Stock:<strong> { product.Stock} </strong></p>
                        <p className="card-text">Price:<strong> {`₹${product.Price}`} </strong></p>
                        <Link className="btn btn-info me-2" to='/dashboard/full-details-product' onClick={() => handleDetails(product)} >
                            Full Details
                        </Link>
                        <Link className="btn btn-primary me-2" to="/dashboard/edit-details-product" onClick={() => handleDetails(product)} >
                            Edit
                        </Link>
                        <button className="deleteButton btn btn-danger" onClick={() => handleDelete(product)} >
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>) :
        (<div className='container'> 
            <div className="row mt-3" >
              {products.map((product, index) => (  
                <div className=" col-md-4 mb-3" key={index}>
                <div className="card">
                    <img src={product.PhotoUrl} className="card-img-top" alt="product image" style={{height:"400px", objectFit:"cover"}}/>    
                    <div style={{position:"absolute",borderRadius:"10px", backgroundColor:"#1BB6FF", color:"white", padding:"10px", top:"10px", right:"10px", fontSize:"20px", fontWeight:"bold", fontFamily:"sans-serif", height:"50px"}}>
                        <p><b>{product.Rating}</b></p>
                    </div>
                        <div className="card-body text-center">   
                        <p className="card-text"><strong style={{fontSize:"25px", color:"#0013FF"}}> {product.Name}</strong></p>
                        <p className="card-text">Stock:<strong> { product.Stock} </strong></p>
                        <p className="card-text">Price:<strong> {`₹${product.Price}`} </strong></p>
                        <Link className="btn btn-info me-2" to='/dashboard/full-details-product' onClick={() => handleDetails(product)} >
                            Full Details
                        </Link>
                        <Link className="btn btn-primary me-2" to="/dashboard/edit-details-product" onClick={() => handleDetails(product)} >
                            Edit
                        </Link>
                        <button className="deleteButton btn btn-danger" onClick={() => handleDelete(product)} >
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>)}
    </div>
  )
}

export default AllProducts
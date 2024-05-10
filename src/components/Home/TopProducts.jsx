import React, { useContext } from 'react'
import "./Table.css"
import { HomeContext } from '../Context/HomeContext'

const TopProducts = () => {

    const { top50Product } = useContext(HomeContext);

  return (
    <div className='table-container'>
        <h3 className='text-center'>Top Selling Products</h3>
        <div className='table-wrapper'>
        <table id='movable-table' className="table table-bordered border-primary table-info" style={{border: "solid 1px"}}>
            <thead>
                <tr>
                <th scope="col">Top</th>
                <th scope="col">Product Name</th>
                <th scope="col">No. of times Sold</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
            {top50Product.map((product, index) => ( 
                <tr key={index}>  
                <th scope="row" >{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.totalQuantity}</td>
                </tr>
            ))} 
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default TopProducts
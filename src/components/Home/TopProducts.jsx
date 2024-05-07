import React from 'react'
import "./Table.css"

const TopProducts = () => {

    const products = [
        {
            id: 1,
            name: "Product 1",
            sold: 123
        },
        {
            id: 2,
            name: "Product 2",
            sold: 234
        },
        {
            id: 3,
            name: "Product 3",
            sold: 345 
        }    
    ]
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
            {products.map((product, index) => ( 
                <tr key={index}>  
                <th scope="row" >{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.sold}</td>
                </tr>
            ))} 
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default TopProducts
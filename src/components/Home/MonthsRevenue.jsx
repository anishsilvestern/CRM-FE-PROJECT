import React from 'react'
import "./Table.css"

const MonthsRevenue = () => {
    const customers = [
        {
            id: 1,
            name: "Customer 1",
            sold: 123,
            totalAmt: 1234
        },
        {
            id: 2,
            name: "Customer 2",
            sold: 234,
            totalAmt: 2345
        },
        {
            id: 3,
            name: "Customer 3",
            sold: 345,
            totalAmt: 3456
        }    
    ]
  return (
    <div className='table-container'>
        <h3 className='text-center'>Months Revenue</h3>
        <div className='table-wrapper'>
        <table id='movable-table' className="table table-bordered border-primary table-info" style={{border: "solid 1px"}}>
            <thead>
                <tr>
                <th scope="col">Months</th>
                <th scope="col">Product Sold</th>
                <th scope="col">Total Revenue</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
            {customers.map((Customer, index) => ( 
                <tr key={index}>  
                <th scope="row" >{index + 1}</th>
                <td>{Customer.name}</td>
                <td>{Customer.sold}</td>
                </tr>
            ))} 
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default MonthsRevenue
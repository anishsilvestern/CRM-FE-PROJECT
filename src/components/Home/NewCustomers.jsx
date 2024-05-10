import React, { useContext } from 'react'
import "./Table.css"
import { HomeContext } from '../Context/HomeContext'

const NewCustomers = () => {

    const { NewCustomers } = useContext(HomeContext);

  return (
    <div className='table-container'>
        <h3 className='text-center'>New Customers</h3>
        <div className='table-wrapper'>
        <table id='movable-table' className="table table-bordered border-primary table-info" style={{border: "solid 1px"}}>
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Sources</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
            {NewCustomers.map((Customer, index) => ( 
                <tr key={index}>  
                <th scope="row" >{index + 1}</th>
                <td>{Customer.name}</td>
                <td>{Customer.source}</td>
                <td>{Customer.status}</td>
                </tr>
            ))} 
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default NewCustomers
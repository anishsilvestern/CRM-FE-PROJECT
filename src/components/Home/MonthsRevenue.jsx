import React, { useContext } from 'react'
import "./Table.css"
import { HomeContext } from '../Context/HomeContext';

const MonthsRevenue = () => {

    const { monthlyRevenues } = useContext(HomeContext);


    
  // Function to calculate monthly revenue
function calculateMonthlyRevenue(monthlyRevenues) {

    const monthlyRevenue = {};
  

    monthlyRevenues.forEach(purchase => {

      const purchaseDate = new Date(purchase.date);
      const month = purchaseDate.getMonth() + 1; 
      const year = purchaseDate.getFullYear();
      const monthKey = `${year}-${month}`; 
      if (monthlyRevenue[monthKey]) {
        monthlyRevenue[monthKey] += purchase.total_amount_rs;
      } else {
        monthlyRevenue[monthKey] = purchase.total_amount_rs;
      }
    });
  
    const monthlyRevenueArray = Object.entries(monthlyRevenue).map(([key, value]) => {
      const [year, month] = key.split('-');
      return { month: `${getMonthName(parseInt(month))} ${year}`, totalRevenue: value };
    });
  
    return monthlyRevenueArray;
  }
  
  // Function to convert month number to month name
  function getMonthName(month) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[month - 1];
  }

  const monthlyRevenue = calculateMonthlyRevenue(monthlyRevenues);

  const orderMonths = monthlyRevenue.sort((a, b) => new Date(b.month) - new Date(a.month));


    
  return (
    <div className='table-container'>
        <h3 className='text-center'>Months Revenue</h3>
        <div className='table-wrapper'>
        <table id='movable-table' className="table table-bordered border-primary table-info" style={{border: "solid 1px"}}>
            <thead>
                <tr>
                <th scope="col">Months</th>
                <th scope="col">Total Revenue</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
            {orderMonths.map((revenue, index) => ( 
                <tr key={index}>  
                <th scope="row" >{revenue.month}</th>
                <td>{`₹${revenue.totalRevenue}`}</td>
                </tr>
            ))}  
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default MonthsRevenue
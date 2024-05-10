import React from 'react'
import TopProducts from './TopProducts'
import PurchasedCustomers from './PurchasedCustomers'
import MonthsRevenue from './MonthsRevenue'
import NewCustomers from './NewCustomers'



const Home = () => {
  return (
    <div>
        <div className='container my-5'>
            <div className='row'>
                <div className="col">
                    <TopProducts />
                </div>
                <div className="col">
                    <PurchasedCustomers />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MonthsRevenue />
                </div>
                <div className="col">
                    <NewCustomers />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
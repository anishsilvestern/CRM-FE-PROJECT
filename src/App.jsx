import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import UserLogin from './components/Login/UserLogin'
import UserRegister from './components/Register/UserRegister'
import EmailSend from './components/Login/EmailSend'
import NewPassword from './components/Login/NewPassword'
import DashBoard from './components/DashBoard/DashBoard'
import Profile from './components/User/Profile'
import Settings from './components/User/Settings'
import AllCustomers from './components/Customer/AllCustomers'
import CustomerContact from './components/Customer/CustomerContact'
import AddCustomers from './components/Customer/AddCustomers'
import AllProducts from './components/Products/AllProducts'
import AddProduct from './components/Products/AddProduct'
import EditDetailsCustomer from './components/Customer/EditDetailsCustomer'
import FullDetailsCustomer from './components/Customer/FullDetailsCustomer'
import FullDetailsProduct from './components/Products/FullDetailsProduct'
import EditDetailsProduct from './components/Products/EditDetailsProduct'
import Home from './components/Home/Home'
import Communication from './components/Customer/Contact/Communication'
import Feedback from './components/Customer/Contact/Feedback'
import { CustomerFillForm } from './components/CustomerDashboard/CustomerFillForm'
import { LoginProvider } from './components/Context/LoginContext'
import { CustomerProvider } from './components/Context/CustomerContext'
import { PrefernceProvider } from './components/Context/PreferenceContext'
import { ProductProvider } from './components/Context/ProductContext'
import { CommunicationProvider } from './components/Context/CummunicationContext'
import { HomeProvider } from './components/Context/HomeContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLogin />
  },
  {
    path: "/login",
    element: <UserLogin />
  },
  {
    path: "/register",
    element: <UserRegister />
  },
  {
    path: "/email-send",
    element: <EmailSend />
  },
  {
    path: "/new-password",
    element: <NewPassword />
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
      path: 'all-customers',
      element: <AllCustomers />
      },
      {
        path: 'customers-contact',
        element: <CustomerContact />
      },
      {
        path: 'add-customer',
        element: <AddCustomers />
      },
      {
        path: 'all-products',
        element: <AllProducts />
      },
      {
        path: 'add-product',
        element: <AddProduct />
      },
      {
        path: 'full-details-customer',
        element: <FullDetailsCustomer />
      },
      {
        path: 'edit-details-customer',
        element: <EditDetailsCustomer />
      },
      {
        path: 'full-details-product',
        element: <FullDetailsProduct />
      },
      {
        path: 'edit-details-product',
        element: <EditDetailsProduct />
      },
      {
        path: '/dashboard',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'communication',
        element: <Communication />
      },
      {
        path: 'feedback',
        element: <Feedback />
      }
    ]
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/settings",
    element: <Settings />,
    children: [
      {
      path: 'new-password',
      element: <NewPassword />
      }
    ]
  },
  {
    path: "/customer-fil-form",
    element: <CustomerFillForm />
  }
])


function App() {

  return (
    <>
    <HomeProvider>
      <LoginProvider>
        <ProductProvider>
          <CustomerProvider>
            <PrefernceProvider>
              <CommunicationProvider>
                <RouterProvider router={router} />
              </CommunicationProvider>
            </PrefernceProvider>
          </CustomerProvider>
        </ProductProvider>
      </LoginProvider> 
    </HomeProvider>  
    </>
  );
}

export default App

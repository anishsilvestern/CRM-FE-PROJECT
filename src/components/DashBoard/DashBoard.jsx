import { Outlet } from 'react-router'
import { NavBar } from '../NavBar/NavBar'
import UserLogin from '../Login/UserLogin'

const DashBoard = () => {

  const token = localStorage.getItem('token')

  return (
    <div>
      {token ? <div>
      <NavBar />
      <Outlet />
  </div> : <UserLogin />}
    </div>
  )
}

export default DashBoard
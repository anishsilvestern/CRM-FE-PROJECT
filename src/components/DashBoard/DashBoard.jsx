import { Outlet } from 'react-router'
import { NavBar } from '../NavBar/NavBar'
import Home from '../Home/Home'

const DashBoard = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default DashBoard
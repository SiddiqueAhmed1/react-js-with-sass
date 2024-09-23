import { Link, Outlet, useLocation } from "react-router-dom"
import Helmets from "../../components/Helmet/Helmets"
import './Admin.scss'
import routeCheck from "../../helpers/helpers"

const Admin = () => {
  const location = useLocation()
  return (
    <>
    <Helmets helmet={'Admin'}/ >
      
      <div className="dashboard">
        <div className="dashboard-left">
            <ul>
              <li>
                <Link to="users" className={routeCheck(location.pathname, 'users') ? 'active' : ''}>Users</Link>
              </li>
              <li>
                <Link to="category" className={routeCheck(location.pathname, 'category') ? 'active' : ''}>Category</Link>
              </li>
              <li>
                <Link to="posts" className={routeCheck(location.pathname, 'posts') ? 'active' : ''}>Posts</Link>
              </li>
              <li>
                <Link to="edit" className={routeCheck(location.pathname, 'edit') ? 'active' : ''}>Edit</Link>
              </li>
            </ul>
        </div>
        <div className="dashboard-right">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Admin

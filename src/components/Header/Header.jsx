import { Link, useLocation } from "react-router-dom";
import "../Header/Header.scss";
import routeCheck from "../../helpers/helpers";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                {" "}
                <img
                  src="https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className={routeCheck(location.pathname , 'admin') ? 'active' : ''}
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className={location.pathname === "/service" ? "active" : ""}
                >
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

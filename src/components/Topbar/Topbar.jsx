import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import './Topbar.scss'
const Topbar = () => {
  return (
    <>
       <div className="top-bar">
        <div className="container">
            <div className="top-bar-left">
              <ul>
                <li>
                <a href=""> <i><FaPhone/></i> <span>+8801889972995</span></a>
                </li>
                <li>
                <a href=""> <i><IoMdMail/></i> <span>info@sorobindu.com</span></a>
                </li>
              </ul>
             
                
            </div>
            <div className="top-bar-right">
              <button><a href="#"> Log In </a></button>
              <button><a href="#"> Register </a></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topbar

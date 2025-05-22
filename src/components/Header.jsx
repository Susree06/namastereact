import "../index.css";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food delivery logo illustration" />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Contact Us </li>
          <li> Cart </li>
          <button className="login">Login</button>
        </ul>
      </div>

    </div>
  )
}
export default Header;
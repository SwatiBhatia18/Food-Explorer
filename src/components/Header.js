import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText , setBtnText] = useState("Login")
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO_URL} alt="logo" /></Link>
      </div>
      <nav className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><button className="login-button" onClick={()=>{
            btnText === "Login"  ?  setBtnText("Logout") : setBtnText("Login")
          }}>{btnText}</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

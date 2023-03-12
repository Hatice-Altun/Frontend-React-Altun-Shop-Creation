import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import {ShoppingBag} from "phosphor-react";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>

        <div className="link">
        <Link to="/">
          <span className="logo-container">
            <img src={Logo} alt="logo"/>
          </span>
        </Link>
        </div>

        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/shop"> Macarons </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <ShoppingBag size={35}/>
          </Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingBag size={35}/>
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

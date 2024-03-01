import React, { useState } from "react";
import Logo from "../assets/hamburger-logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const turnDown = () => {
    setOpenLinks(false)
  } 
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       <div> <img className="logo" src={Logo} /> </div>
        <div className="hiddenLinks">
          <Link to="/" onClick={turnDown}> Home </Link>
          <Link to="/menu" onClick={turnDown}> Menu </Link>
          <Link to="/about" onClick={turnDown}> About </Link>
          <Link to="/contact" onClick={turnDown}> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

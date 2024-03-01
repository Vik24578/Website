import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {

  return (
    <div className="footer">
      <div className="socialMedia">
       <Link to="https://github.com/Vik24578" target="_blank" ><GitHubIcon /></Link> 
       <Link to="https://www.linkedin.com/in/wiktor-paras-506a7420b/" target="_blank" ><LinkedInIcon /> </Link> 
        
        
        
      </div>
      <p> @2024 Wiktor's burger </p>
    </div>
  );
}

export default Footer;

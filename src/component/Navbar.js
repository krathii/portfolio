import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const location = useLocation();

  const[locat,setLocat]=useState("/")

  useEffect(() => {
    setLocat(location.pathname);
    
  }, [location]);

  const hamburger = (value) => {
    setNavbar(value);
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        
        {locat=== "/" ? "" : <Link to="/">Home</Link>}
        {locat=== "/about" ? "" : <Link to="/about">About</Link>}
        {locat=== "/skills" ? "" : <Link to="/skills">Skills</Link>}
        {locat=== "/education" ? "" : <Link to="/education">Education</Link>}

        {locat=== "/contact" ? "" : <Link to="/contact">Contact</Link>}
        
        
      </div>

      <div className="mobile-menu">
        {/* Hamburger icon for mobile */}
        <span className="icon" onClick={() => hamburger(true)}>
          <button onClick={() => hamburger(true)}>&#9776;</button>
        </span>

        {/* Mobile sidebar */}
        {navbar && (
          <div id="mysidebar" className="sidebar">
            <span className="closebtn" onClick={() => hamburger(false)}>
              &times;
            </span>
            <ul>
              <li>
                <Link to="/" onClick={() => hamburger(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => hamburger(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" onClick={() => hamburger(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/education" onClick={() => hamburger(false)}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => hamburger(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </div>
    
  );
}

export default Navbar;

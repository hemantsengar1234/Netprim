
import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";




const Header = () => {
const [isMobile, setIsMobile] = useState(false);
  
  return (
    <nav className="header">
      <div className="logo">NETPRIME</div>
      <ul className={isMobile ? "nav-menu-mobile": "nav-menu"}
      onClick={()=> setIsMobile(false)}>
        <Link to="/tvshows" className="list-items"><li>TV Shows</li></Link>
        <Link to="/movies" className="list-items"><li>Movies</li></Link>
        <Link to="/recently added" className="list-items"><li>Recently Added</li></Link>
        <Link to="/my list" className="list-items"><li>My List</li></Link>
      </ul>
      <button className="mobile-menu-icon"
      onClick={()=> setIsMobile(!isMobile)}>
        {isMobile ?  ( <i class="fa fa-times" ></i>) : ( <i class="fa fa-bars"  ></i> )}
      </button>
    </nav>
  )
}

export default Header

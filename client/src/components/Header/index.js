
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const handleLogoClick = async (event) => {
  event.preventDefault();

  console.log("Logo Clicked");
  navigate("/home");
  
  };

  return (

    // <div className="HeaderClass mt-auto mb-0">


    //   <h1>HEADER!!!!</h1>
    
    
    // </div>
    <header className="Header">
      <img src={require("../../img/ClaytonSkaggsDEV_Logo.png")} onClick={(event) => handleLogoClick(event)} className="Logo mt-2 mx-2" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
        
      >
        <nav className="Nav">
          <a className="text-center" href="/DevPortfolio">Developer<br></br>Portfolio</a>
          <a href="/Media">Media</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          {/* <button>Logout</button> */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>

  );


}


export default Header;


//!========================= EOF =========================
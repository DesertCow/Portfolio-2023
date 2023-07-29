
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

import { useNavigate } from "react-router-dom";

import bootstrap from 'bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// const bootstrap = require('bootstrap')

const Header = () => {

  const navigate = useNavigate();


  const handleLogoClick = async (event) => {
  event.preventDefault();

  console.log("Logo Clicked");
  navigate("/home");
  
  };

  return (

    <header className="Header d-flex justify-content-between ">
      <img src={require("../../img/ClaytonSkaggsDEV_Logo.png")} onClick={(event) => handleLogoClick(event)} className="Logo mt-2 mx-2" alt="logo" />
      <Navbar className="d-flex">
        <Container fluid className="mx-5">
          <Navbar.Brand className="mx-5 navBarText" href="#home">Development Portfolio</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbar-dark-example" /> */}
          <Navbar.Toggle/>
          <Navbar.Collapse className="navBarText mx-5">
            <Nav>
              <NavDropdown
                title="Media"
                menuVariant="dark"
                className="DropMenu"
              >
                <NavDropdown.Item href="#action/3.1">Photo Gallery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">Video Gallery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>
//      <header className="Header">
//        <img src={require("../../img/ClaytonSkaggsDEV_Logo.png")} onClick={(event) => handleLogoClick(event)} className="Logo mt-2 mx-2" alt="logo" />
//  <nav className="navbar navbar-expand-lg navbar-light bg-light">
//    <a className="navbar-brand" href="#">Navbar</a>
//    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//      <span className="navbar-toggler-icon"></span>
//    </button>
//    <div className="collapse navbar-collapse" id="navbarSupportedContent">
//      <ul className="navbar-nav mr-auto">
//        <li className="nav-item active">
//          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//        </li>
//        <li className="nav-item">
//          <a className="nav-link" href="#">Link</a>
//        </li>
//        <li className="nav-item dropdown">
//          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//            Dropdown
//          </a>
//          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//            <a className="dropdown-item" href="#">Action</a>
//            <a className="dropdown-item" href="#">Another action</a>
//            <div className="dropdown-divider"></div>
//            <a className="dropdown-item" href="#">Something else here</a>
//          </div>
//        </li>
//        <li className="nav-item">
//          <a className="nav-link disabled" href="#">Disabled</a>
//        </li>
//      </ul>
/* <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */
//    </div>
//  </nav>
//      </header>

  );


}


export default Header;


//!========================= EOF =========================
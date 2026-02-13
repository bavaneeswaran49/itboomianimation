import React from "react";
import './Navbar.css'
import { IoIosCall } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
      <div className="container">

        <a className="navbar-brand fw-semibold" href="#">
          <h3 className="navh1">Hello<span className="voilet">zitu</span></h3>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">


          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <div className="maincall">
            <div className="call">
              <IoIosCall className="calli" ></IoIosCall>
            </div>
            <div className="num"><p className="p">+91 8238486613</p></div>
          </div></div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Asset/logo-ilab.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-custom-bg">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-6 col-lg-2">
            <Link to="/" className="navbar-brand img-fluid logos">
              <img src={logo} alt="logo" width="130" height="55" />
            </Link>
          </div>
          <div className="col-6 col-lg-8 d-flex justify-content-center">
            <div className="navbar-nav d-flex align-items-center">
              <Link to="/" className="nav-link text-center" style={{ marginRight: '5px' }}>
                HOME
              </Link>
              <Link to="/about" className="nav-link text-center" style={{ marginRight: '5px' }}>
                ABOUT US
              </Link>
              <Link to="/contact" className="nav-link text-center" style={{ marginRight: '5px' }}>
                CONTACT
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center">
            <button type="button" className="btn custom-buttom-login1">
              SIGN UP
            </button>
            <button type="button" className="btn custom-buttom-login">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

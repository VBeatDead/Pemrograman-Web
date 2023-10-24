import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Asset/logo-ilab.png';
import facebook from '../Asset/logo-facebook.png';
import instagram from '../Asset/logo-instagram.png';
import twitter from '../Asset/logo-twitter.png';


const Footer = () => {
  return (
    <footer>
      <div className="row h-100 footer-wrapper" style={{ paddingTop: '4%' }}>
        <div className="col-md-5 col-xs-12 img-fluid btlg">
          <img src={logo} alt="logo" width="150" height="77" />
          <p className="cop">Copyright © 2022 Infinite Learning</p>
        </div>
        <div className="col-md-2 col-xs-6 just">
          <p className="footwe">Service</p>
          <p>Email Marketing</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className="col-md-2 col-xs-6 just">
          <p className="footwe">About</p>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
        <div className="col-md-2 col-xs-6 just">
          <p className="footwe">Follow Us</p>
          <p>
            <img src={facebook} alt="logo-facebook" width="13" height="20" style={{ marginRight: '17px' }} />
            Facebook
          </p>
          <p>
            <img src={twitter} alt="logo-twitter" width="20" height="20" style={{ marginRight: '10px' }} />
            Twitter
          </p>
          <p>
            <img src={instagram} alt="logo-instagram" width="20" height="20" style={{ marginRight: '11px' }} />
            Instagram
          </p>
        </div>
        <div className="col-md-12 col-xs-6 copy">
          <p className="cop">Copyright © 2022 Infinite Learning</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

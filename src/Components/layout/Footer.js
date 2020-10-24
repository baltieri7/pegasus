import React, { Component } from 'react'
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Redes sociais</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!"><FaFacebookF/> facebook/teste</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><AiFillInstagram /> @instagram</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"><FiTwitter/> @twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
                <div className="col s6">
                  <p className="grey-text text-lighten-4">Copyright ©2020   2bsoft. All rights reserved.</p>
                </div>
              </div>
            </div>
 
        </footer>
      </div>
    );
  }
}

export default Footer;
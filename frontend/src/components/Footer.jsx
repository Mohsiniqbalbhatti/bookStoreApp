import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="mt-3">
        <hr />
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <ul>
                <li className="footer-item">
                  <Link to="/">About</Link>
                </li>
                <li className="footer-item">
                  {" "}
                  <Link to="/">Contact</Link>
                </li>
                <li className="footer-item">
                  {" "}
                  <Link to="/">Jobs</Link>
                </li>
                <li className="footer-item">
                  {" "}
                  <Link to="/">Press-kit</Link>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <ul>
                <li className="footer-item">
                  {" "}
                  <Link to="twiter">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li className="footer-item">
                  {" "}
                  <Link to="twiter">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </li>
                <li className="footer-item">
                  {" "}
                  <Link to="twiter">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 ">
              <p>Copyrights &copy; All rights reserved by you!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

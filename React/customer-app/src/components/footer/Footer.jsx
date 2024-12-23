import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-light">
      <div className="container p-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">GaragePro</h5>
            <p>
              Your ultimate solution for streamlined vehicle repair and
              management. Efficient, accurate, and hassle-free!
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <p>
              <i className="fas fa-home me-2"></i> 123 Main Street, New York, NY
              10012
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> info@garagepro.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> +1 234 567 890
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>

      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} GaragePro | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

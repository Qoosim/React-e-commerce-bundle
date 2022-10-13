import React, { Component } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg bg-dark ${styles.navbarStyle}`}>
          <div className={`container-fluid ${styles.navbarColor}`}>
            <Link to="/" className="navbar-brand">eCommerce</Link>
            <button
              className={`navbar-toggler`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Login</Link>
                </li>
                 <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link to="/customers" className="nav-link">Customers</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">ShoppingCart</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;

import React, { Component } from 'react';
import styles from './navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg bg-dark ${styles.navbarStyle}`}>
          <div className={`container-fluid ${styles.navbarColor}`}>
            <a className="navbar-brand" href="/">My App</a>
            <button
              className={`navbar-toggler`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon ${styles.hamburger}`}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
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

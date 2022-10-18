import React from 'react';
import styles from './navbar.module.css';
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h2>OnlineShop</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.cartDiv}>
          <BsCart3 className={styles.cartIcon} />
          <span className={styles.cartCounter}>
            <span>3</span>
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar;

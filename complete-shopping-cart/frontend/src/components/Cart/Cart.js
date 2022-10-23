import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import styles from './cart.module.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {
        cart.cartItems.length === 0 ? (
          <div className={styles.cartEmpty}>
            <p>Your cart is currently empty</p>
            <div className={styles.startShopping}>
              <Link to="/">
                <BsArrowLeft />
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.title}>
              <h3 className={styles.productTitle}>Product</h3>
              <h3 className={styles.price}>Price</h3>
              <h3 className={styles.quantity}>Quantity</h3>
              <h3 className={styles.total}>Total</h3>
            </div>
            <div className={styles.cartItems}>
              {
                cart.cartItems.map((cartItem) => (
                  <div className={styles.cartItem} key={cartItem.id}>
                    <div className={styles.cartProduct}>
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.desc}</p>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div className={styles.cartProductPrice}>${cartItem.price}</div>
                    <div className={styles.cartProductQuantity}>
                      <button>-</button>
                      <div className={styles.count}>{cartItem.cartQuantity}</div>
                      <button>+</button>
                    </div>
                    <div className={styles.cartProductTotalPrice}>
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))
              }
            </div>
            <div class={styles.cartSummary}>
              <button className={styles.clearCart}>Clear Cart</button>
              <div className={styles.cartCheckout}>
                <div className={styles.subTotal}>
                  <span>Subtotal</span>
                  <span className={styles.amount}>${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check out</button>
                <div className={styles.continueShopping}>
                  <Link to="/">
                    <BsArrowLeft />
                    <span>Continue Shopping</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart;

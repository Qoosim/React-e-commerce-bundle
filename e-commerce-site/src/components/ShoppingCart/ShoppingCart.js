import React, { Component } from 'react';
import styles from './shoppingCart.module.css';
import Product from '../Product/Product'

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: 'iPhone', price: 8900, quantity: 0},
      { id: 2, productName: 'Sony Camera', price: 4500, quantity: 0},
      { id: 3, productName: 'Samsung LED TV', price: 78900, quantity: 0},
      { id: 4, productName: 'iPad Pro', price: 7600, quantity: 0},
      { id: 5, productName: 'Xbox', price: 8800, quantity: 0},
      { id: 6, productName: 'Dell Monitor', price: 19000, quantity: 0},
    ]
  }

  // executes when the user clicks on the + button
  handleIncrement = (product, maxValue) => {
    // get the index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product)
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      // update the state of current component(parentcomponent)
      this.setState({
        products: allProducts
      })
    }
  }
  
  // executes when the user clicks on the - button
  handleDecrement = (product, minValue) => {
    // get the index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      // update the state of current component(parent component)
      this.setState({
        products: allProducts
      })
    }
  }

  // executes when the user clicks on Delete(X) button in the Product component
  handleDelete = (product) => {
    // get te index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    // delete product based on index
    allProducts.splice(index, 1);

    // update the state of current component(parent component)
    this.setState({
      products: allProducts
    })
  }

  render() {
    return (
      <div className="container-fluid">
          <h4 className={styles.headerStyle}>Shopping Cart</h4>
          <div className="row">
            {
              this.state.products.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                  >
                  <button className="btn btn-primary d-block">Buy Now</button>
                  </Product>
                )
              })
            }
          </div>
      </div>
    )
  }
}

export default ShoppingCart;

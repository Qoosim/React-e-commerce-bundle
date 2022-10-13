import React, { Component } from 'react';
import styles from './shoppingCart.module.css';
import Product from '../Product/Product'

class ShoppingCart extends Component {
  // executes when component is mounted
  constructor(props) {
    // console.log("Constructor - ShoppingCart")
    super(props); // calling super class's contructor
    // Initialization of the state
    this.state = {
      products: []
    }
  }

  // Executes after the constructor and render methods(includes life cycle of child component, if any) of the current component.
  componentDidMount= async ()  => {
    // fetches data from data source
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json();
    console.log(data);
    this.setState({
      products: data
    })
    // console.log("componentDidMount - ShoppingCart")
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

    if (window.confirm("Are you sure to delete?")) {
      // delete product based on index
      allProducts.splice(index, 1);

      // update the state of current component(parent component)
      this.setState({
        products: allProducts
      })
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    //console.log(
     // "componentDidUpdate - ShoppingCart", 
      // prevProps, 
      // prevState, 
      // this.props, 
      // this.state
    // )

    //if (prevProps.x !== this.props.x) {
      // make http request
    //}
  }

  // Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    // console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch - ShoppingCart");
    // console.log(error, info);

    // localStorage.lastError = `${error}\n${JSON.stringify(info)}`
  }

  render() {
    // console.log("render - ShoppingCart")
    return (
      <>
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
      </>
    )
  }

 
}

export default ShoppingCart;

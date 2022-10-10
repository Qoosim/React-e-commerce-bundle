import React, { Component } from 'react';
import styles from './product.module.css';

class Product extends Component {

  state = {
    product: this.props.product
  }

  render() {
    console.log(this.state.product);
    return (
      <div className="col-lg-4">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">#{this.state.product.id}</div>
            <h5 className="pt-5 border-top">{this.state.product.productName}</h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-start">
              <span className="badge text-black">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button className="btn btn-outline-success">+</button>
                <button className="btn btn-outline-success">-</button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;

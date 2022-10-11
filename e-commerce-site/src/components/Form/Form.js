import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleLoginClick = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        <div className="form-group form-row">
          <label className="col-lg-4" htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(e) => { this.setState({ email: e.target.value }) }} 
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4" htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(e) => { this.setState({ password: e.target.value }) }}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.handleLoginClick}>Login</button>
        </div>
      </div>
    )
  }
}

export default Form;

import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: ''
    }
  }

  handleLoginClick = () => {
    console.log(this.state)
    if (this.state.email === 'admin@test.com' && this.state.password === 'admin123') {
      this.setState({
        message: <span className="text-success">Successfully logged-in</span>
      })
    } else {
      this.setState({
        message: <span className="text-danger">Invalid login, please try again!</span>
      })
    }
  }

  render() {
    return (
      <div className="col-lg-4 m-auto">
        <h4 className="m-4 text-center">Login</h4>

        <div className="form-group form-row m-2">
          <label className="col-lg-4" htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(e) => { this.setState({ email: e.target.value }) }} 
          />
        </div>
        <div className="form-group form-row m-2">
          <label className="col-lg-4" htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(e) => { this.setState({ password: e.target.value }) }}
          />
        </div>
        <div className="float-end">
          <span className="p-2">{this.state.message}</span>
          <button
            className="btn btn-primary"
            onClick={this.handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Form;
